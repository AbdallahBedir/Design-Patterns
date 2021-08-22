class Logger {
    constructor() {
        if(Logger.instance instanceof Logger){
            return Logger.instance;
        }

        this.logs = []

        Object.freeze(this);
        Logger.instance = this; 
    }

  
    log(message) {
        this.logs.push(message)
        console.log(`FANCY: ${message}`)
    }

    printLogCount() {
        console.log(`${this.logs.length} Logs`)
    }
}

const l1 = new Logger()
const l2 = new Logger();

l1.printLogCount()
l1.log('message1')
l1.printLogCount()

l2.printLogCount()
l2.log('message2')
l2.printLogCount()


console.log(`l1 === l2`,l1 === l2);