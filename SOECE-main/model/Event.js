const { getdb } = require('./database');

module.exports = class Event {
    static async Fetchall() {
        const db = getdb();
        return await db.collection('events').find({}).toArray();
    }
};