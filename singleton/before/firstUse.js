import FancyLogger from './fancyLogger.js';
const logger = new FancyLogger();

function FirstImplementation() {

    logger.printLogCount();
    logger.log('First file');
    logger.printLogCount();
}

export default FirstImplementation;
