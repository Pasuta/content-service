"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const tc_nodejs_core_services_1 = require("tc-nodejs-core-services");
/**
 * Access point for modules/services in the application
 */
class App extends tc_nodejs_core_services_1.BaseApp {
    static get config() {
        return tc_nodejs_core_services_1.BaseApp.config;
    }
    static get logger() {
        return tc_nodejs_core_services_1.BaseApp.logger;
    }
    static get httpClient() {
        return tc_nodejs_core_services_1.BaseApp.httpClient;
    }
    static get appDir() {
        return __dirname;
    }
    static INIT(env) {
        const file = env === 'test' ? '../config/test.json' : '../config/local.json';
        tc_nodejs_core_services_1.BaseApp.config = new tc_nodejs_core_services_1.Config(path_1.resolve(__dirname, file));
        tc_nodejs_core_services_1.BaseApp.logger = new tc_nodejs_core_services_1.Logger(tc_nodejs_core_services_1.BaseApp.config.get('logger:level'), { application: 'barbecue' });
        tc_nodejs_core_services_1.BaseApp.httpClient = new tc_nodejs_core_services_1.HttpClient(tc_nodejs_core_services_1.BaseApp.config, tc_nodejs_core_services_1.BaseApp.logger);
    }
}
exports.App = App;

//# sourceMappingURL=App.js.map
