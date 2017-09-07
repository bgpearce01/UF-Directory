var mongoose = require('mongoose'),
    config = require('./config'), 
    listing = require('./ListingSchema.js');
   
    mongoose.connect(config.db.uri);
    

var findLibraryWest = function() {
  listing.findOne({ name: 'Library West' }, function(err, item) {
    if (err) throw err;
    console.log(item);
  });
};
var removeCable = function() {
  listing.findOne({ code: 'CABL' }, function(err, item) {
    if (err) throw err;
    item.remove(function(err) {
      if (err) throw err;
      console.log(item);
    });
  });
};
var updatePhelpsMemorial = function() {
  listing.findOne({code: "PHL" }, function(err, item) {
    if (err) throw err;
    item.address = 'Gainesville, FL 32603';
    item.save(function(err) {
      if (err) throw err;
      console.log(item);
    }); 
  });
};
var retrieveAllListings = function() {
  listing.find({}, function(err, item) {
    if (err) throw err;
    console.log(item);
  });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();