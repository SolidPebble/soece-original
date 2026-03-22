let path = require('path');
let { getdb } = require(path.join(__dirname, 'database.js'));

module.exports = class Event {
    constructor(type, Name, Description, EventDate,) {
        this.type = type;
        this.Name = Name;
        this.Description = Description;
        this.EventDate;
    }
    static async Fetchall() {
        let db = getdb();
        let data = await db.collection('events').find({}).toArray();
        return data;
    }

}