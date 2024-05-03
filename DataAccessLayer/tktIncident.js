const sql = require('../DB/connection')
const tktIncidentEntity = require('../DataAccessLayer/tktIncident')

class tktIncident extends tktIncidentEntity{

   async generateTicket(messageId, from, subject, description) {
        const result = await sql.query`
        INSERT INTO tkt_Incident
        (messageid ,    from , description , subject)
        VALUES(${messageId}, ${from}, ${description}, ${subject})
        `;

        return result;
    }

    async showTicket(){
        //logic
    }

    async updateTicket(){
        //logic
    }

   
}

module.exports = tktIncident