const MongoClient = require('mongodb').MongoClient;

// Connect to MongoDB
let db;

module.exports = {
    connect: function(){
        MongoClient.connect(process.env.DB_URL, { useNewUrlParser: true },
            (err, client) => {
                if(err) console.log("ERROR WHILE CONNECTING TO MONGODB: " + err);
                db = client.db(process.env.DB_NAME);
                console.log("- connect db: " + db);
            });
    },
    getDB: function() {
        return db;
    }
};