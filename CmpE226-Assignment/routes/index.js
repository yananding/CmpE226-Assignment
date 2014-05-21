
/*
 * GET home page.
 */
var MongoClient = require('mongodb').MongoClient;

exports.itemlist = function(db) {
    return function(req, res) {
        var collection = db.get('data');
        collection.find({},{},function(e,docs){
            res.render('itemlist', {
                "itemlist" : docs
            });
        });
    };
};

exports.TV = function(db) {
    return function(req, res) {
        var collection = db.get('data');
        collection.find({},{},function(e,docs){
            res.render('TV', {
                "TV" : docs
            });
        });
    };
};

exports.Refrigerator = function(db) {
    return function(req, res) {
        var collection = db.get('data');
        collection.find({},{},function(e,docs){
            res.render('Refrigerator', {
                "Refrigerator" : docs
            });
        });
    };
};

exports.Book = function(db) {
    return function(req, res) {
        var collection = db.get('data');
        collection.find({},{},function(e,docs){
            res.render('Book', {
                "Book" : docs
            });
        });
    };
};

exports.NailPolish = function(db) {
    return function(req, res) {
        var collection = db.get('data');
        collection.find({},{},function(e,docs){
            res.render('NailPolish', {
                "NailPolish" : docs
            });
        });
    };
};

exports.search = function(req,res){
	MongoClient.connect('mongodb://localhost/mydb', function(err, db) {
		  if(err) throw err;
		  console.log("Connected to Database");
		  var collection = db.collection('data');
		  collection.find({ $text: { $search: req.query.search}}).toArray(function(err, doc) {
			  if(err) throw err;
	          if(doc != null) console.log("Doc from Each ");
	          console.dir(doc);
	          res.render('search', {data:doc });
	          db.close();
	        });
		})
};


       
           