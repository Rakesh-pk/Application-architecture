const tktIncident = require('../DataAccessLayer/tktIncident');

class tktController {
    constructor() {
        this.ticketGenerator = new tktIncident();
    }

    createTicket() {
        this.ticketGenerator.generateTicket('123', 'abc@gmail.com', 'test' , 'description_1234');
    }
}

module.exports = tktController;
