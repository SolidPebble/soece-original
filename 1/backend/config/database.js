const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
require('dotenv').config();

let _db;

const mongoserver = (callback) => {
    console.log('Connecting to MongoDB...');
    MongoClient.connect(process.env.MONGO_URI, {
        serverSelectionTimeoutMS: 10000,
    })
        .then((client) => {
            _db = client.db('Soece');
            console.log('Connected to MongoDB');
            callback();
        })
        .catch((err) => {
            console.error('MongoDB connection failed:', err.message);
            process.exit(1);
        });
};

const getdb = () => {
    if (!_db) throw new Error('MongoDB not connected');
    return _db;
};

exports.mongoserver = mongoserver;
exports.getdb = getdb;