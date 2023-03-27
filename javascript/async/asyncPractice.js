// this is my simple async skills practice in javascript, some of these are things I already know 


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


// async (promises)

async function love() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  } );

  Display(await myPromise);
}

