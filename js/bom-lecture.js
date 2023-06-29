"use strict"

// set interval

function sayHello() {
    console.log("Hello")
}

 let intervalId = setInterval(sayHello, 5); // give the setInterval an id

 clearInterval(intervalId)  // clear the interval using clearInterval() , you need the id of the setInterval.

// create pop-up add after 3 secs

let x;
 let wait = 2000;

 let timeoutId = setTimeout(function() {  // setTimout allows you to delay the execution of code
     alert("You won dude");
     x = 23;
     console.log("The value of x is: " + x);
 }, wait);

 // asynchronous errors
    console.log(x);

    window.location = "https://google.com"; // redirects user to another website

