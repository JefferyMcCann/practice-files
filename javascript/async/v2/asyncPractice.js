// this is my simple async skills practice in javascript, some of these are things I already know 

/* global variables, these are bad practice depending upon the language but sometimes useful. 
I still use them sometimes especially for small learning prograns */ 

let a = 1;  


// callbacks in html through buttons are inhernetly asynchronous.  

function Display(stuff){
	document.getElementById("Display").innerHTML = stuff;
} 

function hello(){
	Display("hello there");
}

function goodbye(){
	
	Display("goodbye");

}


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
  	Display("I LOVE YOU !!");
  }).catch((message) => {
  	Display("I HATE YOU !!");
  })
}

// buttons for real time differnces in the promises 

function a1(){
	a = 1; 
}

function a2(){
	a = 2; 
}
