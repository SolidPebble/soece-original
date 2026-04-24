const path = require('path');
const { getdb } = require(path.join(__dirname, '..', 'config', 'database.js'));

module.exports = class Placement {
    static async Fetchall() {
        const db = getdb();
        const data = await db.collection('Placements').find({}).toArray();
        return data;
    }
};