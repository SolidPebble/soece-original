let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
const url = "mongodb://solidpebble:solidpebble@ac-2pypcul-shard-00-00.nwxyyqk.mongodb.net:27017,ac-2pypcul-shard-00-01.nwxyyqk.mongodb.net:27017,ac-2pypcul-shard-00-02.nwxyyqk.mongodb.net:27017/Soece?authSource=admin&replicaSet=atlas-hqgnak-shard-0&ssl=true";
let _db;
let mongoserver = (callback) => {
    console.log('Attempting to connect to MongoDB...');
    MongoClient.connect(url, {
        serverSelectionTimeoutMS: 10000,
    })
        .then((client) => {
            _db = client.db('Soece');
            console.log('connected to server');
            callback();
        })
        .catch(err => {
            console.error('MongoDB connection failed:');
            console.error('Error name:', err.name);
            console.error('Error message:', err.message);
            console.log(err);
            if (err.message.includes('ECONNREF') || err.message.includes('querySrv')) {
                console.error('\n--- Possible causes ---');
                console.error('1. Your IP is not whitelisted in MongoDB Atlas (Network Access)');
                console.error('2. Your internet connection may be blocking MongoDB DNS');
                console.error('3. The MongoDB Atlas cluster may be paused or unavailable');
                console.error('Go to https://cloud.mongodb.com -> Network Access -> Add your current IP');
            }
        })
}

let getdb = () => {
    if (!_db) {
        throw new Error("Mongo not connected");
    }
    else {
        return _db;
    }
}

exports.mongoserver = mongoserver;
exports.getdb = getdb;