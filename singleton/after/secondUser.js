import logger from './fancyLogger.js';

function SecondImplementation() {

    logger.printLogCount();
    logger.log('Second file');
    logger.printLogCount();
}

export default SecondImplementation;