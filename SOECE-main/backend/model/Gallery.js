const path = require('path');
const { getdb } = require(path.join(__dirname, '..', 'config', 'database.js'));

module.exports = class Gallery {
    static async Fetchall() {
        const db = getdb();
        const data = await db.collection('Gallery').find({}).toArray();
        return data;
    }
};