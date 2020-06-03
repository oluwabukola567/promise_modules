var promise = require('promise');
var MongoClient =require('mongodb').MongoClient;
var url = 'mongodb://localhost/my_first_data';
var dbname = 'my_first_data'
let db
let db1 

MongoClient.connect(url)
.then(function(client){
   db = client.db(dbname)
    db.collection('characters').insertOne({
       name: "Atoke"
    })
    });