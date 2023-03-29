// this is my simple async skills practice in javascript, some of these are things I already know 

/* global variables, these are bad practice depending upon the language but sometimes useful. 
I still use them sometimes especially for small learning prograns */ 

let a = 1;  

// calls in html through buttons are inhernetly asynchronous.  

function Display(stuff){
	document.getElementById("Display").innerHTML = stuff;
} 

function hello(){
	Display("hello there");
}

function goodbye(){
	
	Display("goodbye");

}

// callbacks 

function Calc(num1, num2, myCallback) { // calling this in the html doc gives an error, call code on line 31 instead as it is the correct syntax
  let sum = num1 + num2;
  myCallback(sum);
}

// Calc(5, 5, Display); this callback once put into the html doc works perfectly.

// promises 

async function love() {
  let myPromise = new Promise(function(resolve, reject) {
   if (a == 1) {
    resolve("I love You !!");
   } else {
   	reject("I HATE YOU !!");
   }

  } );

  myPromise.then((message) => {
  	console.log('This is then/resolved ' + message); 
  	Display(message);
  }).catch((message) => {
  	console.log('this is catched/rejected ' + message);
  	Display(message);
  })
}

// buttons for real time differnces in the promises 

function a1(){
	a = 1; 
}

function a2(){
	a = 2; 
}
