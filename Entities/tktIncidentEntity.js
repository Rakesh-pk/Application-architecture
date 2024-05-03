class tktIncidentEntity {
    constructor(messageId, from, subject, description) {
        this.messageId = messageId;
        this.from = from;
        this.subject = subject;
        this.description = description;
    }
}

module.exports = tktIncidentEntity;