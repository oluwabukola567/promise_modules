var promise = require('promise');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/my_first_data';
var dbname = 'my_first_data';
let db


MongoClient.connect(url)
    .then(function(client){
        db = client.db(dbname)
        db.collection('characters').updateOne({
            "name" : "newName"
        }, {
            $set : {
                "name" : "Atoke"
            }
        
        })
    })