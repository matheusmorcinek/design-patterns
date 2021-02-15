import CoreFactory from './core.js';

const core = CoreFactory.createCore();

try {

    core.start();
    core.stop();
} catch (error) {

    console.log('Uncaught error!');
    console.error(error);
}