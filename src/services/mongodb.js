/**
 * Establishes a connection with mongodb database. The connection string is
 * being built from parameters which are in the config.yml mongodb section.
 *
 * @module src/services/mongodb
 */

const client = require('mongodb').MongoClient;

const config = require('./config');

let _logger;
let connection;
let exitConnectionHandler;

/**
 * Creates a function that may be used to close mongodb connection.
 *
 * @param {string} [reason] Text identifier - reason to close the conneciton.
 *
 * @return {Function} Closes mongodb connection.
 */
const createCloseConnectionHandler = (reason) => {
  return async () => {
    if (!connection) {
      console.error('MongoDB connection is closed already or not established yet');
      return;
    }

    reason && _logger.info(`Closing mongodb connection. Reason: ${reason})`);

    await connection.close();
    _logger.info(`MongoDB connection closed from ${config.get('mongodb:name')}`);
    connection = null;
    exports.collection = () => Promise.resolve();

    if (exitConnectionHandler) {
      process.removeListener('exit', exitConnectionHandler);
      exitConnectionHandler = null;
    }
  };
};

/**
 * Connects to MongoDB by connectionOptions parameters
 * @param {object} connectionOptions options
 * @param {string} connectionOptions.host host to MongoDB
 * @param {string} connectionOptions.port post to MongoDB
 * @param {string} connectionOptions.name name of database
 * @param {string} [connectionOptions.user] user of database
 * @param {string} [connectionOptions.pass] password for user
 * @param {object} logger logger
 * @return {Promise} after connection established
 */
exports.connect = async (connectionOptions, logger) => {
  _logger = logger;
  const {host, port, name, user, pass, reconnectTries, reconnectInterval} = connectionOptions;

  const credentials = user ? `${user}:${pass}@` : '';
  const url = `mongodb://${credentials}${host}:${port}/${name}`;
  const updatesFolder = config.get('migration:updatesFolder');
  const db = await client.connect(url, {
    promiseLibrary: Promise,
    autoReconnect: true,
    reconnectTries,
    reconnectInterval
  });
  logger.info(`MongoDB connection established to ${db.databaseName}.`);

  db.on('close', () => {
    if (connection) {
      _logger.error('MongoClient: lost connection');
    }
    connection = null;
  });

  db.on('reconnect', (server, db) => {
    _logger.info('MongoClient: reconnected');
    connection = db;
  });

  connection = db;
  exports.collection = (name) => Promise.resolve(connection.collection(name));

  exitConnectionHandler = createCloseConnectionHandler('process.exit');
  process.on('exit', exitConnectionHandler);

  return await raceForUpdates.start(() => updates.apply(url, updatesFolder), logger);
};

/**
 * Closes established mongodb connection.
 */
exports.close = createCloseConnectionHandler();

/**
 * Checks if connection to Mongodb is established
 * @return {boolean} true if connected
 */
exports.isConnected = () => {
  return connection ? connection.serverConfig.isConnected() : false;
};
