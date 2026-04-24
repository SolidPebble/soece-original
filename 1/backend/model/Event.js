const path = require('path');
const { getdb } = require(path.join(__dirname, '..', 'config', 'database.js'));

module.exports = class Event {
    static async Fetchall() {
        const db = getdb();
        const data = await db.collection('events').find({}).toArray();
        return data;
    }
};