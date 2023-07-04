//                  DAY 4 of Class

//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook
// $350. How much will you receive in payment for this week? You worked 10 hours for Facebook,
// 6 hours for Google and 4 hours for Amazon


let googleHourlyRate = 400;
let amazonHourlyRate = 380;
let facebookHourlyRate = 350;

let googleHours = 6;
let amazonHours = 4;
let facebookHours = 10;

let weeklyGooglePay = googleHourlyRate * googleHours
let weeklyAmazonPay = amazonHourlyRate * amazonHours
let weeklyFacebookPay = facebookHourlyRate * facebookHours

let totalWeeklyPay = weeklyAmazonPay + weeklyGooglePay + weeklyFacebookPay;
console.log(totalWeeklyPay)

// A student can be enrolled in a class only if the class is not full and
//the class schedule does not conflict with her current schedule.

let fullClass = false;
let dateConfliction = false;
//let canEnroll =

//A product offer can be applied only if a person buys more than 2 items,
// and the offer has not expired. Premium members do not need to buy a
// specific amount of products.

// //let atleastTwo = true;
// let offerNotexpired = true;
// let premiumMember = true
//
// let prodOff = offerNotexpired && (atleastTwo || premiumMember);
//
// let prodOff = (atleastTwo && offerNotexpired) || (premiumMember && offerNotexpired);
//
// //Use the following code to follow the instructions below:
// var username = 'codeup';
// var password = 'notastrongpassword';
//
// //Create a variable that holds a boolean value for each of the following conditions:
// //
// // the password must be at least 5 characters
// let passwordAtLeast5 = password.length >= 5;
//
// // the password must not include the username
// let passwordHasNoUsername = !password.includes(username);
//
// // the username must be no more than 20 characters
// let usernameWithinLength = username.length <= 20;
//
// // neither the username or password can start or end with whitespace
//let usernameAndPasswordTrimmed = username.trim() === username &&
// password.trim() === password;
// Grab ingredients
// Wash your hands with soap
// Go to the pantry
// Grab 2 slices of bread
// grab the peanut and jelly  grab a butter knife
// grab a plate
// Grab a napkin
//   Assembly
//  Spread slices of bread on plate
//  open jar of peanut butter
// Apply a glob of peanut butter on one side of slice
// Spread the peanut butter evenly
// wipe the peanut butter off the knife with the napkin
// Close the jar of peanut butter
//
// Spread slices of bread on plate
// open jar of jelly
// Apply a glob of jelly on one side of the other slice
// Spread the jelly evenly
// wipe the jelly off the knife with the napkin
//
// Close the jar of jelly
// grab the two slices of bread and put them on top of each other and press gently

//const timeWaiting = prompt("How const userWantsToDelete = confirm(\"Do you want to delete\");\nlong have you been waiting?")
// if(userWantsToDelete) {
//  console.log("delete");
// } else {
//   console.log("no delete")
//}

// userWantsToDelete ? console.log("delete") : console.log("no delete"); // Short if else
//
// const fishBiting = confirm("Fish are biting?")
// if (fishBiting) {
//   console.log("Reel it in")
// } else if (timeWaiting > 3) {
//   console.log("Recast the line")
// } else {
//   console.log("Keep staring at the water")
// }

// June 09, 2023 Monday
//write a function, sumIsEqual, that takes in three inputs. the function should return true if the sum of the first two inputs are equal to the third input. If any of the inputs are not number, return false.
//   function isNotANumber(input) {
//     if (typeof input === 'number' || isNaN(input) ) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//
//   function sumIsEqual (input1, input2, input3) {
// if(isNotANumber(input1, input2, input3)) {
//   return false;
// } else if (input1 + input2 === input3) {
//   return false;
// } else {
//   return true;
// }
//   }
//   console.log(sumIsEqual(3, 4, 7));
//   console.log(sumIsEqual(2, 2, 6));
//   console.log(sumIsEqual(4, 50, 2));
//   console.log(sumIsEqual('5', '2', '9'));

//================================= WARM UP Jun 21
// Create a function, returnProduct, that takes in an array of numbers and returns the product of all the numbers.
// Assume all element in the input array are valid numbers. Assume all array inputs have at least 1 number.
// returnProduct([1, 2, 3]) // returns 1 * 2 * 3 = 6
// returnProduct([3, 3, 3]) // returns 3 * 3 * 3 = 27
// returnProduct([4, 1, 2]) // returns 4 * 1 * 2 = 8
// returnProduct([4, 0, 2]) // returns 4 * 0 * 2 = 0
// returnProduct([5, 3, 2]) // returns 5 * 3 * 2 = 30

// function returnProduct(nums) {
//     let product = 1
//     for (let num of nums) {
//         product *= num;
//     }
//     return product;
//
// function returnProduct(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         product *= nums[i];
//     }
//     return product;
// }

// //TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
// var names = ['Alexis', 'Omar', 'Carlos', 'Karina']
//
// // TODO: Create a log statement that will log the number of elements in the names array.
// console.log("There are " + names.length + " names in the array");
//
// // TODO: Create log statements that will print each of the names array elements individually.
// for (var i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }
//
// names.forEach(function (element, index, array) {
//     console.log(element);
// });

//     EXAMPLE...

const salesData = [
    {
        month: 'January',
        totalItemsSold: 0
    },
    {
        month: 'February',
        totalItemsSold: 5
    },
    {
        month: 'March',
        totalItemsSold: 2
    },
    {
        month: 'April',
        totalItemsSold: 10
    },
    {
        month: 'May',
        totalItemsSold: 30
    }
];

// returnTotalSales(salesData) // returns 47
// ================================= WARM UP
//
// Create a function, returnTotalSales, that takes in an array of sales data objects and returns the sum of all
// totalItemsSold properties. Assume all elements in the input array are valid sales data objects with a totalItemsSold
// property.
//

//for loop version
function returnTotalSales(arr) {
    let total = 0;
    for (let i = 0; i < salesData.length; i++) {
        total = total + salesData[i].totalItemsSold;
    }
    return total;
}
console.log(returnTotalSales(salesData))

// ================================= WARM UP
//
// Create a function, returnAvgSales, that takes in an array of sales data objects and returns the average of all
// total items sold. Assume all elements in the input array are valid sales data objects with a totalItemsSold
// property. If the array is empty, return 0. If the array has one element, return the value of the totalItemsSold.

    //EXAMPLE...

//returnAvgSales(salesData) // returns 9.4

function returnAvgSales(arr) {
  return returnTotalSales(salesData) / salesData.length;
}
console.log(returnAvgSales(salesData))




const users = [

    {
        username: 'fred123',
        password: 'letmein',
        email: 'fred123@email.com',
        isAdmin: true
    },
    {
        username: 'cindy123',
        password: 'hello123',
        email: 'cindy123@email.com',
        isAdmin: false
    },
    {
        username: 'kathy123',
        password: 'letmein',
        email: 'kathy123@email.com',
        isAdmin: true
    },
    {
        username: 'kyle123',
        password: 'letmein',
        email: 'kyle123@email.com',
        isAdmin: false
    }
]

// ================================= WARM UP
//
// Create a function, returnAdmins, that takes in an array of user objects
// and returns an array of only the admin user objects. Assume the array
// has at least one user object and all elements have an isAdmin property.
//
//     Example:
/*

returnAdmins(users) returns...

[

    {
        username: 'fred123',
        password: 'letmein',
        email: 'fred123@email.com',
        isAdmin: true
    },
    {
        username: 'kathy123',
        password: 'letmein',
        email: 'kathy123@email.com',
        isAdmin: true
    }
]

*/

function returnAdmins(users) {
    const admins = [];

     for (let i = 0; i < users.length; i++) {
         if (users[i].isAdmin === true) {
            admins.push(users[i]);
         }
     }
     return admins;
}

console.log(returnAdmins(users));




// example data...

const neighborhood1 = {
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: 22
};

const neighborhood2 = {
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "high",
    schools: 24
}

const neighborhood3 = {
    neighborhood: "Oak Mountain",
    medianHomePrice: 290000,
    pool: false,
    tennis: false,
    crimeRate: "low",
    schools: 24
}

const neighborhood4 = {
    neighborhood: "Ginormous Acres",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: 27
}
// ================================= WARM UP
//
// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable.
//     If the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.
// The function should return true if the neighborhood object is desireable and false otherwise.


// function isDesirableHood(neighborhood) {
//     const isRightPrice = neighborhood.medianHomePrice < 300000;
//     const isRightCrimeRate = neighborhood.crimeRate === "low";
//     const isRightSchoolRating = neighborhood.schools >= 24;
//
//     const isDesirable = isRightPrice && isRightCrimeRate && isRightSchoolRating;
//
//     return isDesirable;
// }

// function isDesirableHood(neighborhood) {
//     return neighborhood.medianHomePrice < 300000 && neighborhood.crimeRate === "low" && neighborhood.schools >= 24
// }

// DESTRUCTURING

function isDesirableHood({medianHomePrice, crimeRate, schools}) {
    return medianHomePrice < 300000 && crimeRate === "low" && schools >= 24
}


console.log(isDesirableHood(neighborhood1), false)
console.log(isDesirableHood(neighborhood2), false)
console.log(isDesirableHood(neighborhood3), true)
console.log(isDesirableHood(neighborhood4), false)


// ================================= WARM UP
//
//
// Write a function, returnLargestStudentCount, that takes in an array of classes returns the number of students in the largest class.
// Assume at least one class object will be present in the input array with students property set to a valid positive integer.

    let classes = [
    {class: "6th grade history", students: 18},
    {class: "7th grade history", students: 20},
    {class: "8th grade history", students: 22},
    {class: "4th grade history", students: 30},
    {class: "10th grade history", students: 25}
];



function returnLargestStudentCount(classes) {
    let largest = 0
    let number = 0
    for (let i = 0; i < classes.length; i++) {
        number = classes[i].students;
        largest = Math.max(largest, number)
    }
    return largest
}


console.log(returnLargestStudentCount(classes), 30) // returns 30

"use strict";
//warm up for arrays
// TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
var names = ['Alexis', 'Omar', 'Carlos', 'Karina']

// TODO: Create a log statement that will log the number of elements in the names array.
console.log("There are " + names.length + " names in the array");

// TODO: Create log statements that will print each of the names array elements individually.
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

names.forEach(function (element, index, array) {
    console.log(element);
});

// TODO: Show an alert message that welcomes the user based on their input.
alert("Welcome, " + userName + "!")
// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
var response = confirm("Do you like pizza, " + userName + "?")

if (response) {
    alert("Sweet, I do too!")
} else {
    alert("Really? That's weird...")
}







