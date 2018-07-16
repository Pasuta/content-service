"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const App_1 = require("./App");
const routes_1 = require("./routes");
class Server {
    constructor() {
        this.expressApp = express();
        this.initMiddlewares();
        this.initRoutes();
        this.connectToDB()
            .then(() => App_1.App.logger.info('Successfully connected to DB'))
            .catch((err) => App_1.App.logger.info('Connection to db has been failed', err));
    }
    get express() {
        return this.expressApp;
    }
    listen(port) {
        this.expressApp.on('listening', () => {
            App_1.App.logger.info(`Listening on ${port}`);
        });
        this.httpServer = this.expressApp.listen(port);
    }
    onError(callback) {
        this.expressApp.on('error', (error) => {
            if (error.syscall !== 'listen') {
                throw error;
            }
            callback(error);
        });
    }
    close(callback) {
        this.httpServer.close(callback);
        mongoose.connection.close();
    }
    /**
     * http(s) request middleware
     */
    initMiddlewares() {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.disable('etag');
        this.express.use((req, res, next) => {
            App_1.App.logger.info('request');
            res.header('Access-Control-Allow-Origin', '*'); // dev only
            res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            if (req.method === 'OPTIONS') {
                res.status(200).send();
            }
            else {
                next();
            }
        });
    }
    /**
     * API main routes
     */
    initRoutes() {
        this.express.use(routes_1.router);
        this.express.use('/', (req, res) => {
            res.status(404).send({ error: 'path doesnt exist' });
        });
    }
    connectToDB() {
        const name = App_1.App.config.get('db:name');
        const host = App_1.App.config.get('db:host');
        const port = App_1.App.config.get('db:port');
        const url = `mongodb://${host}:${port}/${name}`;
        App_1.App.logger.info(`Connecting to ${url}`);
        return new Promise((resolve, reject) => {
            mongoose.connect(url);
            mongoose.connection.on('error', () => {
                App_1.App.logger.info('MongoDB connection error. Please make sure MongoDB is running.');
                process.exit();
            });
            resolve();
        });
    }
}
exports.Server = Server;

//# sourceMappingURL=Server.js.map
