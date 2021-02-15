import DatabaseFactory from './database.js';
import WebServerFactory from './webserver.js';

class CoreFactory {

    static createCore(configurations = {}) {

        const database = configurations.database || DatabaseFactory.createDatabaseConnection();
        const webserver = configurations.webserver || WebServerFactory.createWebServer();

        function start() {

            console.log('\n[Core] Starting core...');
            database.start();
            webserver.start();
            console.log('[Core] Starting done! System up and running!');
        }

        function stop() {

            console.log('\n[Core] Stopping core...');
            database.stop();
            webserver.start();
            console.log('[Core] Stopping done!');
        }

        return {
            start,
            stop
        }
    }
}

export default CoreFactory;