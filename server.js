//Brian Pearce CEN3031 - Assignemnt 1


var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function (request, response) {
  var parsedUrl = url.parse(request.url);
    
  if (parsedUrl.pathname == '/listings'){                     //check to see if right path has been entered
  response.writeHead(200, {"Context-Type": "text/plain"});
  response.write(listingData);                                //will print to screen everything in the listingData object
  response.end();
  }
  else{                                                       //if correct path not entered, change status to 404 and write to screen.
    response.writeHead(404, {"Context-Type": "text/plain"});
    response.write("Bad gateway error");
    response.end();
  };
    
  

  /*
    Your request handler should send listingData in the JSON format if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 

    HINT: explore the request object and its properties 
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */
};

fs.readFile('listings.json', 'utf8', function(err, data) {

  listingData = data;                                     //referecning data to listingData object
  http.createServer(requestHandler).listen(8080);         //creating webserver
  console.log("The Server has started...");
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */
});
