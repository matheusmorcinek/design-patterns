class WebServerFactory {

    static createWebServer() {

        function start() {

            console.log('[WebServer] Starting...');
            console.log('[WebServer] Waiting for port to be available...');
            console.log('[WebServer] Starting done!');
        }

        function stop() {

            console.log('[WebServer] Stopping...');
            console.log('[WebServer] Gracefully waiting for all clients...');
            console.log('[WebServer] Closing all the ports...');
            console.log('[WebServer] Stopping done!');
        }

        return {
            start,
            stop
        }
    }
}

export default WebServerFactory;