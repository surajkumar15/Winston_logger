//import {loggerfile} from "./create-files"
import {createLogger} from './'

const logger = createLogger();
logger.log('info','hello server',{
    message: "server is running at 3000 port",
    startTimestamp: Date.now(),
    duration: 343,
    routeName: '/'
})
