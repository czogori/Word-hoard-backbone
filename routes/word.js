var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    db;

var mongoClient = new MongoClient(new Server('localhost', 27017));
mongoClient.open(function(err, mongoClient) {
    db = mongoClient.db("word-hoard");
    db.collection('words', {strict:true}, function(err, collection) {    	
        if (err) {
            console.log("The 'words' collection doesn't exist.");            
        }        
    });
});

exports.findAll = function(req, res) {    
    db.collection('words', function(err, collection) {
        collection.find().toArray(function(err, items) {
                res.jsonp(items);
            });
    });
};

exports.add = function(req, res) {
    var word = req.body;
    db.collection('words', function(err, collection) {
        collection.insert(word, {safe:true}, function(err, result) {});
    });
};