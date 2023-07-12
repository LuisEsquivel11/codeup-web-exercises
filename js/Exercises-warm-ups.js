"use strict"
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

// // TODO: Show an alert message that welcomes the user based on their input.
// alert("Welcome, " + userName + "!")
// // TODO: Ask the user if they like pizza.
// //       Based on their answer show a creative alert message.
// var response = confirm("Do you like pizza, " + userName + "?")

// if (response) {
//     alert("Sweet, I do too!")
// } else {
//     alert("Really? That's weird...")
// }

// 1. Create a function that prints 1 to 100.
//
//
// 2. Create a function, fizzBuzz, that prints out all numbers from 1 to 100 but instead of printing
// numbers that are evenly divisible by 3, print 'fizz' and any numbers evenly divisible
// by 5, print 'buzz'. For any numbers that are evenly divisible by 3 AND 5, print 'fizzbuzz'.

function fizzBuzz() {

}

/*
fizzBuzz() // prints...

1
2
'fizz'
4
'buzz'
'fizz'
7
8
'fizz'
'buzz'
11
'fizz'
13
14
'fizzbuzz'
etc...

*/

// You are given an array of runner objects, where each object represents a
// runner with properties name, age, and lapTimes (in seconds). Write a
// function called getTopRunners that takes the runners array as input and
// returns an array of top runners. A runner is considered top if their
// average lap time is 50 seconds or faster. If there are no top runners in
// the input array, the function should return an empty array

const runners = [
    { name: "Alice", age: 25, lapTimes: [50.5, 45.2, 48.8, 47.1] },
    { name: "Bob", age: 28, lapTimes: [55.2, 50.7, 53.3, 52.9] },
    { name: "Charlie", age: 24, lapTimes: [48.9, 46.3, 50.1, 49.5] },
    { name: "David", age: 27, lapTimes: [51.4, 50.2, 49.8, 52.3] },
    { name: "Eve", age: 26, lapTimes: [47.7, 45.9, 46.6, 48.3] },
];

// lap time is 50 seconds or faster

//     function calculateLapTimeAverage(array) {
//         let lapTimes= runners.lapTimes
//         let sum = 0;
//         lapTimes.forEach((element) => {
//             sum += element;
//         });
//         return sum / array.length;
//
// }
// console.log(calculateLapTimeAverage(runners))

function getTopRunners(runnersArray) {
    //declare topRunners array
    let topRunners = [];

    for (let runner of runnersArray) {
        //check if top runner
        //if true add if not do nothing
        if (calculateLapTimeAverage(runner.lapTimes) > 50)
            topRunners.push(runner)
    }
}

    function getTopRunner(runnersArray) {
        let topRunner = runnersArray[0];

        //Loop through the array
        for (let i = 1; i < runnersArray.length; i++) {
            //Check if the runner is faster than our current top runner
            if (calculateLapTimeAverage(runnersArray[i].lapTimes) < calculateLapTimeAverage(topRunner.lapTimes)) {
                // If so, replace the top runner
                topRunner = runnersArray[i]
            }
                }
        return topRunner;
    }

  console.log(getTopRunner(runners));




    function calculateLapTimeAverage(lapTimesArray) {
        let total = 0
        let count = 0

        for (let lapTime of lapTimesArray) {
            total += lapTime;
            count++;
        }
        return total / count;
    }

    //return empty array if no top runners

console.log(getTopRunners(runners));

// HINT: You might want to create a function called calculateLapTimeAverage


// that takes in an array of numbers and returns the average
// Input:

// Expected Output:
// [
//     { name: 'Alice', age: 25, lapTimes: [50.5, 45.2, 48.8, 47.1] },
//     { name: 'Charlie', age: 24, lapTimes: [48.9, 46.3, 50.1, 49.5] },
//     { name: 'Eve', age: 26, lapTimes: [47.7, 45.9, 46.6, 48.3] }
// ]



// BONUS: Each runner in the resulting array should be represented as an
// object containing only the name and age properties.


// Expected Bonus Output:
//     [
    // { name: "Alice", age: 18 },
    //     { name: "Charlie", age: 19 },
    //     { name: "Eve", age: 17 }
    // ]







const hogwartsHouses = [
    {
    "id": "0367baf3-1cb6-4baf-bede-48e17e1cd005",
    "name": "Gryffindor",
    "houseColours": "Scarlet and gold",
    "founder": "Godric Gryffindor",
    "animal": "Lion",
    "element": "Fire",
    "ghost": "Nearly-Headless Nick",
    "commonRoom": "Gryffindor Tower",
    "heads": [
        {
        "id": "530da97d-5a83-4ea6-bc15-790edf5b5efc",
        "firstName": "Minerva",
        "lastName": "McGonagall"
        },
        {
        "id": "9915c5f8-9177-4f63-bba8-d04387a404f9",
        "firstName": "Godric",
        "lastName": "Gryffindor"
        }
    ],
    "traits": [
        {
        "id": "1773bce8-7a22-4d57-b8e1-7e1cbe26fa2b",
        "name": "Courage"
    },
        {
        "id": "21f22e43-efd9-4a43-87f5-eab5fb1666ea",
        "name": "Chivalary"
    },
        {
        "id": "60d8f5d0-de4b-41f7-b152-40543555bf3a",
        "name": "Nerve"
    },
        {
        "id": "68f73efc-fae9-4a54-b3e2-04bbe72f5d63",
        "name": "Daring"
    },
        {
        "id": "7e6d321d-fe7d-4c05-8ad7-ddabda83d8cd",
        "name": "Determination"
    },
        {
        "id": "adf83e9f-859b-41c4-947d-b359a05f8f3c",
        "name": "Bravery"
    }
    ]
},
    {
    "id": "805fd37a-65ae-4fe5-b336-d767b8b7c73a",
    "name": "Ravenclaw",
    "houseColours": "Blue and bronze",
    "founder": "Rowena Ravenclaw",
    "animal": "Eagle",
    "element": "Air",
    "ghost": "Grey Lady",
    "commonRoom": "Ravenclaw Tower",
    "heads": [
        {
        "id": "102ac5fc-db71-4055-8250-bc238cffb3d9",
        "firstName": "Filius",
        "lastName": "Flitwick"
        },
        {
        "id": "57c04cf4-f3dd-46d6-a78f-84c30fb42533",
        "firstName": "Rowena",
        "lastName": "Ravenclaw"
        }
    ],
    "traits": [
        {
        "id": "08a54d21-6137-4eda-9c32-004706650b44",
        "name": "Learning"
    },
        {
        "id": "5056effc-b92b-4f86-96fd-978b26a849da",
        "name": "Acceptance"
    },
        {
        "id": "78db6224-33d1-490d-a553-9bbbedb3282a",
        "name": "Inteligence"
    },
        {
        "id": "ab88a4fb-1c4d-4e14-88bf-7f55dfabb75a",
        "name": "Wisdom"
    },
        {
        "id": "e43d0b2f-dcfe-4a5f-b3ab-d39679bbfbe3",
        "name": "Wit"
    },
        {
        "id": "ffc55017-c03f-490a-9c48-2f38af6e2f0a",
        "name": "Creativity"
    }
    ]
},
    {
    "id": "85af6295-fd01-4170-a10b-963dd51dce14",
    "name": "Hufflepuff",
    "houseColours": "Yellow and black",
    "founder": "Helga Hufflepuff",
    "animal": "Badger",
    "element": "Earth",
    "ghost": "Fat Friar",
    "commonRoom": "Hufflepuff Basement",
    "heads": [
        {
        "id": "a593e800-95dc-47ab-9243-6ac98d2f6ab4",
        "firstName": "Helga",
        "lastName": "Hufflepuff"
        },
        {
        "id": "fab07935-774e-4eb4-8ed5-621bfe416d85",
        "firstName": "Pomona",
        "lastName": "Sprout"
        }
    ],
    "traits": [
        {
        "id": "22d8bc5b-67ee-49fb-89ee-8811fc22062b",
        "name": "Hardworking"
    },
        {
        "id": "76973c67-0dd1-4aca-b0b7-b053d9eaf206",
        "name": "Patience"
    },
        {
        "id": "a8494f18-caff-491e-96e3-1ff73bd6f4ab",
        "name": "Loyalty"
    },
        {
        "id": "af80b93e-3c61-4586-824a-8f7e6ac4ae0a",
        "name": "Just"
    },
        {
        "id": "c080647f-5b31-434f-8327-376abbfb0989",
        "name": "Fairness"
    },
        {
        "id": "f62f4753-fdb5-473b-a8ac-07c1b5844eec",
        "name": "Modesty"
    }
    ]
},
    {
    "id": "a9704c47-f92e-40a4-8771-ed1899c9b9c1",
    "name": "Slytherin",
    "houseColours": "Green and silver",
    "founder": "Salazar Slytherin",
    "animal": "Serpent",
    "element": "Water",
    "ghost": "Bloody Baron",
    "commonRoom": "Slytherin Dungeon",
    "heads": [
        {
        "id": "36ba2ceb-6b6f-48a3-b512-9c1e66321eff",
        "firstName": "Horace",
        "lastName": "Slughorn"
        },
        {
        "id": "5cac8ad3-b5fc-4c48-a951-990cdd5671bc",
        "firstName": "Salazar",
        "lastName": "Slytherin"
        },
        {
        "id": "ef90f8c9-9f03-478e-baec-8a3c487e5271",
        "firstName": "Severus",
        "lastName": "Snape"
        }
    ],
    "traits": [
        {
        "id": "0992c505-80dd-4b49-ad0b-3b7383d6ec89",
        "name": "Resourcefulness"
    },
        {
        "id": "36dad9bf-010e-47ef-8908-ecb6d5acfac5",
        "name": "Selfpreservation"
    },
        {
        "id": "42b7c304-5e62-4fae-9e52-f8c6a106e406",
        "name": "Ambition"
    },
        {
        "id": "540aaafe-6185-4dc8-94ed-bd0236b433d3",
        "name": "Cunning"
    },
        {
        "id": "d7b7c1b7-3fce-4474-9fd1-9b731e0b2649",
        "name": "Pride"
    },
        {
        "id": "df43d46b-1ebf-409d-a63e-6c6bcb049aef",
        "name": "Determination"
    }
    ]
}
]

// Given the following ARRAY of objects, write a function that LOOPS through
// the array and console logs the following for each Hogwarts House:
// Name:
// Animal:
// Founder:
// Common Room:
// First and Last Name of at least one house head:


const loopHeads = (heads) => {
    let headsStr = '';
    for (const head of heads) {
        headsStr += `${head.firstName} ${head.lastName}`
    }
    return headsStr
}
function houseInfo(houses) {
    // Loop through the array
    houses.forEach((house) => {
        console.log(`
            Hogwarts House: ${house.name}
            Animal: ${house.animal}
            Founder: ${house.founder}
            Common Room: ${house.commonRoom}
            House Head: ${house.heads[0].firstName} ${house.heads[0].lastName}
        `)
    })

}
houseInfo(hogwartsHouses)
// HINT:
// When you copy the object into IntelliJ, make sure to expand and collapse
// the different properties to get a good idea of what is going on and keep
// from being overwhelmed


// BONUS:
// - Log a random house head each time
// - Throw some traits in there
// - Write a conditional statement to log something special for your favorite house













