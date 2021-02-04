class FancyLogger {

    constructor() {

        this.logs = [];
    }

    log(message) {

        this.logs.push(message);
        console.log(`[fancyLogger] > ${message}`);
    }

    printLogCount() {

        console.log(`${this.logs.length} Logs`);
    }

}

export default FancyLogger;