import winston = require("winston");
import Transport = require("winston-transport");
import fs = require("fs")


class FileTransport extends Transport{
    constructor(){
      super()
    }
    log(message: any, cb: () => void){
       let writer=fs.createWriteStream('info.log')
       writer.write(JSON.stringify(message)) 
        

  cb();
}

}

class CustomTransport extends Transport {
  log(message: any) {
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
export const winstonLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new CustomTransport(),new FileTransport()],
});

export const createLogger = () => winstonLogger;
