const path = require('path');
const { getdb } = require(path.join(__dirname, '..', 'config', 'database.js'));

module.exports = class Faculty {
    static async Fetchall() {
        const db = getdb();
        const data = await db.collection('Faculty').find({}).toArray();
        return data;
    }
};