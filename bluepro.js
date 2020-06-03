
var promise = require("bluebird");
var MongoClient =promise.promisifyAll(require("mongodb").MongoClient)
var url = "mongodb://localhost/my_first_data";
var dbname = 'my_first_data';
let db



MongoClient.connectAsync("mongodb://localhost/my_first_data")
    .then(function(client){
        db = client.db(dbname)
        return db.collection('characters').find({})
    })
    .then(function(cursor){
        cursor.each(function (err, doc){
            console.log(doc)
            
            

            
        })
    });
