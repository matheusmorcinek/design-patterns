import FancyLogger from './fancyLogger.js';
const logger = new FancyLogger();

function SecondImplementation() {

    logger.printLogCount();
    logger.log('Second file');
    logger.printLogCount();
}

export default SecondImplementation;