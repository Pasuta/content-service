"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const Server_1 = require("./Server");
App_1.App.INIT();
const server = new Server_1.Server();
exports.server = server;
server.listen(App_1.App.config.get('server:port'));
server.onError((error) => {
    App_1.App.logger.error(error.stack);
    process.exit(1);
});

//# sourceMappingURL=index.js.map
