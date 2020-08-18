"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {loggerfile} from "./create-files"
const _1 = require("./");
const logger = _1.createLogger();
logger.log('info', 'hello server', {
    message: "server is running at 3000 port",
    startTimestamp: Date.now(),
    duration: 343,
    routeName: '/'
});
