"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogger = exports.winstonLogger = void 0;
const winston = require("winston");
const Transport = require("winston-transport");
const fs = require("fs");
class FileTransport extends Transport {
    constructor() {
        super();
    }
    log(message, cb) {
        let writer = fs.createWriteStream('info.log');
        writer.write(JSON.stringify(message));
        cb();
    }
}
class CustomTransport extends Transport {
    log(message) {
        switch (message.level) {
            case "info":
                console.log(message);
                break;
            case "error":
                console.log(message);
                break;
            case "warn":
                console.log(message);
                break;
            case "debug":
                console.log(message);
                break;
            default:
                console.log(message);
        }
    }
}
exports.winstonLogger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [new CustomTransport(), new FileTransport()],
});
exports.createLogger = () => exports.winstonLogger;
