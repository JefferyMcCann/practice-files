// node js practice file 


var http = require('http'); // requires a http file 
var dt = require('./myFirstModule'); // requires a custom file 
var url = require('url'); // requires a url library  
var fs = require('fs'); // ?? fs

http.createServer(function (req, res) { // req is received requests 
  
//	res.writeHead(200, {'Content-Type': 'text/html'}); // http header 
	  
//	res.write("the time is :" + dt.myDateTime());
	  
//	res.write(req.url); // writes the url the user typed in the browser
	  
//	var q = url.parse(req.url, true).query;
	  
//	var txt = q.year + " " + q.month;
	  
//	res.write(txt);

	fs.readFile('calc.html', function(err, data){ // err? is that for error codes? 
		
		res.writeHead(200, {'Content-Type': 'text/html'}); 

		res.write(data); // data = calc.html file contents 

		return res.end(); // needs to be inside the loop 
	});
	  
//	res.end(); // ends response, can have a message but why would you use that for messages??

}).listen(8080); 
