// I am still learning node-js and node-fetch, this is on my laptop 6 hours before the interview may god help me

var http = require('http'); 

var fs = require('fs'); 

var rs = fs.createReadStream('./txt.txt'); 


rs.on('open', function () {

	console.log('open file '); 

});

/*

http.createServer(function (req, res) {
	
	res.writeHead(200, {'Content-Type': 'text/plain'}); 

	res.write('test'); 

	res.end(); 

}).listen(8080); 

*/ 
