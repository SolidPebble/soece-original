const { MongoClient } = require('mongodb');

const url = process.env.MONGODB_URI;
let _db;

const mongoserver = async () => {
    if (_db) return _db;

    try {
        const client = new MongoClient(url);
        await client.connect();
        _db = client.db('Soece');
        console.log('Connected to MongoDB');
        return _db;
    } catch (err) {
        console.error('MongoDB Connection Error:', err);
        throw err;
    }
};

const getdb = () => {
    if (!_db) throw new Error("Database not initialized");
    return _db;
};

module.exports = { mongoserver, getdb };