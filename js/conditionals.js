"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(color) {
//     if (color.toLowerCase() === "blue")  {
//         return "Blue is the color of the ocean.";
//     } else if (color.toLowerCase() === "red") {
//         return "Red is the color of strawberries.";
//     } else if (color.toLowerCase() === "green") {
//         return "Green is good, green means go.";
//     } else if (color.toLowerCase() === "purple") {
//         return "Purple is my favorite color."
//     } else if (color.toLowerCase() === "yellow") {
//         return "Yellow is the color of Spongebob.";
//     } else if (color.toLowerCase() === "black") {
//         return "Black is the color of death."
//     } else if (color.toLowerCase() === "orange") {
//         return "Orange is the color of pumpkins."
//     } else if (color.toLowerCase() === "violet") {
//         return "Violet can be the color of a grape"
//     } else {
//         return ("I don't really like the color " + color)
//     }
// }
// const check = analyzeColor("pink")
// console.log(check)
/*******************Follow along***************************/
// function analyzedColor(colorName) {
//     if(colorName === 'blue') {
//         return "Blue is the color of the sky";
//     } else if(colorName === 'red') {
//         return "Strawberries are red.";
//     } else {
//         return ` I don't kmow anything about ${colorName};`
//     }
// }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//console.log(analyzeColor(randomColor))
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */


// switch(randomColor) {
//     case "blue" :
//         console.log("blue is cool");
//         break;
//     case "red" :
//         console.log("Red is the color of anger")
//         break;
//     case "green" :
//         console.log("Green is the color of chlorophyll")
//         break;
//     case "yellow" :
//         console.log("Yellow is the color of mimosas")
//         break;
//     default:
//         console.log("I don't know much about that color")
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// switch(prompt("Type any color")) {
//     case "blue" :
//         alert("blue is cool");
//         break;
//     case "red" :
//         alert("Red is the color of anger")
//         break;
//     case "green" :
//         alert("Green is the color of chlorophyll")
//         break;
//     case "yellow" :
//         alert("Yellow is the color of mimosas")
//         break;
//     default:
//         alert("I don't know much about that color")
// }

// const userColor = prompt("Enter a color");
// const userColorMessage = analyzedColor(userColor);
// alert(userColorMessage)


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
const luckyNum = Math.floor(Math.random() * 6);

function calculateTotal(luckyNum, totalAmount) {
    if (luckyNum === 0) {
        return totalAmount
    } else if (luckyNum === 1) {
        return (totalAmount - (totalAmount * .10))
    } else if (luckyNum === 2) {
        return (totalAmount - (totalAmount * .25))
    } else if (luckyNum === 3) {
        return (totalAmount - (totalAmount * .35))
    } else if (luckyNum === 4) {
        return (totalAmount - (totalAmount * .50))
    } else if (luckyNum === 5) {
        return totalAmount * 0
    } else {
        return null
    }
 }
/* Switch version*/
// function calculateTotal(luckyNum, totalAmount) {
//     switch(luckyNum) {
//         case 0:
//             return totalAmount;
//         case 1:
//             return totalAmount * 0.90;
//         case 2:
//             return totalAmount * 0.75;
//         case 3:
//             return totalAmount * 0.65;
//         case 4:
//             return totalAmount * 0.50;
//         case 5:
//             return 0;
//         default:
//             console.log("Something went wrong with calculateTotal function")
//             return totalAmount;
//     }
// }

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
 var luckyNumber = Math.floor(Math.random() * 6);
const totalAmount = parseFloat(prompt("How much was the total bill?"))
const discountedPrice = calculateTotal(luckyNumber, totalAmount)
alert("Your lucky number is " + luckyNumber)
alert("Your original price was " + "$" + totalAmount  )
alert("It is now " + "$" + discountedPrice)
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
// const yesOrNo = confirm("Would you like to enter a number?")
//
//  const usersNum = parseFloat(prompt("Enter the number"))
//
//  if (usersNum % 2 !== 0) {
//     alert("This number is odd")
// } else if (usersNum % 2 === 0) {
//     alert("This number is even")
// }
// alert(usersNum + 100)
//
// if (usersNum > 0 ) {
//     alert("This number is positive")
// } else {
//     alert("This number is negative")
//}

function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "This number is Even.";
    } else {
        return "This number is Odd.";
    }
}
function add100(num) {
       return num + 100;
    }

function positiveOrNegative(num) {
    if (num > 0) {
        return "This number is Positive.";
    } else {
        return "This number is Negative.";
    }
}

const userWantsToEnterNumber = confirm("Would you like to enter a number?");

if(userWantsToEnterNumber) {
    let userNumber = prompt("Enter a number");

    if(!isNaN(userNumber)) {
        userNumber = parseInt(userNumber);
        alert(evenOrOdd(userNumber));

        alert(add100(userNumber));

        alert(positiveOrNegative(userNumber));
    } else {
        alert(`You did not enter a number, you entered a ${typeof userNumber}`);
    }
}
