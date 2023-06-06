"use strict"
/******************************Break And Continue ***************************/
//Prompt the user for an odd number between 1 and 50.
// Use a loop and a break statement to continue
// prompting the user if they enter invalid input.
function numberOneThroughFifty() {
    return parseInt(prompt("Enter an odd number from  1 to 50"))
}

// function promptUntilOdd() {
//     do {
//         const uderNumber = numberOneThroughFifty();
//         if (userNumber >= 1 && userNumber <= 50 && userNumber % 2 !== 0) {
//             console.log(`Number to skip is: ` + ${userNumber})
//             for (let i = 1; i <= 50; i++) {
//                 if (i === userNumber) {
//                     console.log(`Yikes! Skipping ${i}`);
//                     continue;
//                 }
//                 if(i % 2) {
//                     console.log(`Here's an odd number: `)
//                 }
//             }
//         }
//     } while(true)
//}
function isValid(num) {
    return userNumber <= 0 || userNumber >= 51 || userNumber % 2 === 0
}



let userNumber
do {
    userNumber = prompt("Please enter an odd number between 1-50?");
    if(userNumber <= 0 || userNumber >= 51 || userNumber % 2 === 0) {
        alert("Number entered is outside the acceptable range or an even number. Please try again.");
    }
    else
        break;
} while (true);
for (let i = 1; i <= 50; i += 2) {
    if(i == userNumber) {
        console.log(`Yikes! Skipping over: ${userNumber}`);
        continue;
    }
    console.log(`There is an odd number: ${i}.`);
}

/*************************************Do While Loop****************************************/
//An ice cream seller can't go home until she sells all of her cones.
// First write enough code that generates a random number between 50 and 100
// representing the amount of cones to sell before you start your loop.
// Inside of the loop your code should generate another random number
// between 1 and 5, simulating the amount of cones being bought by her clients.
// Use a do-while loop to log to the console the amount of cones sold to each person.
// The below code shows how to get the random numbers for this exercise.

//The output should be similar to the following:
//
// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones

function sellMyCones() {
    let allCones = Math.floor(Math.random() * 50) + 50;
    do {
        const customerCones = Math.floor(Math.random() * 5) + 1;
        if (allCones - customerCones < 0) {
            console.log(`I can't sell ${customerCones} cones, I only have ${allCones}`);
            continue;
        } else if (allCones - customerCones === 0) {
            console.log(`Yay! I sold them all!`);
            break;
        } else {
            console.log(`${customerCones} cones sold.`);
            allCones -= customerCones;
        }
        console.log(`I now have ${allCones} cones left`);
    } while (true);
}
sellMyCones();



