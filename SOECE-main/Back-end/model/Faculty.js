const { getdb } = require('./database');

module.exports = class Faculty {
    static async Fetchall() {
        const db = getdb();
        return await db.collection('Faculty').find({}).toArray();
    }
};