// I am still learning node-js and node-fetch, this is on my laptop 6 hours before the interview may god help me

var http = require('http');

var events = require('events');

var eventEmitter = new events.EventEmitter();  

var myEventHandler = function () {
	
	console.log('wow only $12.99/month on an accidental spotify duo subscription'); 

	console.log('I have nobody to share it with as its locked to people in canada only'); 
}


eventEmitter.on('spotify', myEventHandler); 

function spotify(){

	eventEmitter.emit('spotify'); 

}

spotify(); 


// arrow syntax stuff 

bruh = () => {
	
	console.log('I hate arrow syntax already. actually now that I figured it out yea its kinda cool'); 

}; 

bruh();
