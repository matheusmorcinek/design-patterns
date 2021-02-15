class DatabaseFactory {

    static createDatabaseConnection() {

        //do here whatever is necessary for creating an instance of DatabaseConnection

        function start() {

            console.log('[Database] Starting database...');
            console.log('[Database] Connecting to MySql...');
            console.log('[Database] Running migrations...');
            console.log('[Database] Starting done!');
        }

        function stop() {

            console.log('[Database] Stopping...');
            console.log('[Database] Closing MySql connection...');
            console.log('[Database] Stopping done!');
        }

        //respect the contract
        return {
            start,
            stop
        }
    }
}

export default DatabaseFactory;