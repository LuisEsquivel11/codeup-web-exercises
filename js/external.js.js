console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

const userInput = prompt("What's your favorite color?");
    alert(`Awesome, ${userInput} is my favorite color too!`)

/*You have rented some movies for your kids: The little mermaid (for 3 days),
Brother Bear (for 5 days, they love it), and Hercules
(1 day, you don't know yet if they're going to like it).
If price for a movie per day is $3, how much will you have to pay?*/

let hourlyMovieRentalRate = 3;
let daysRentedLittleMermaid = prompt("How many days did you rent Little Mermaid?"))
parseInt(daysRentedLittleMermaid)
console.log(daysRentedLittleMermaid)
let daysRentedBrotherBear = prompt("How many days did you rent Brother Bear?");
parseInt(daysRentedBrotherBear)
console.log(daysRentedBrotherBear)
let daysRentedHercules = prompt("How many days did you rent Hercules?");
parseInt(daysRentedHercules)
console.log(daysRentedHercules)
const totalDaysOfMovieRentals = daysRentedLittleMermaid + daysRentedHercules + daysRentedBrotherBear
const totalCostOfMovieRentals = totalDaysOfMovieRentals * hourlyMovieRentalRate
console.log(totalCostOfMovieRentals)
alert(totalCostOfMovieRentals)











/*Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
 they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook
 $350. How much will you receive in payment for this week? You worked 10 hours for Facebook,
 6 hours for Google and 4 hours for Amazon */

let googleHourlyRate = prompt("How much does Google pay hourly?");
let amazonHourlyRate = prompt("How much does Amazon pay hourly?");
let facebookHourlyRate = prompt("How much does Facebook pay hourly?");

let googleHours = prompt("How many hours did you work for Google?");
let amazonHours = prompt("How many hours did you work for Amazon ?");
let facebookHours = prompt("How many hours did you work for Facebook?");

let weeklyGooglePay = googleHourlyRate * googleHours
let weeklyAmazonPay = amazonHourlyRate * amazonHours
let weeklyFacebookPay = facebookHourlyRate * facebookHours

let totalWeeklyPay = weeklyAmazonPay + weeklyGooglePay + weeklyFacebookPay;
console.log(totalWeeklyPay)

    alert("Your total pay for the week is: " + totalWeeklyPay)

// Student Enrollment
/* A student can be enrolled to a class only if the class is not
full and the class schedule does not conflict with her current schedule. */



let classIsNotFull = confirm("Confirm open seat in class");
let classScheduleDoesNotConflict = confirm("Your schedule must align, if it does not click 'Cancel'")

let studentEnrolled = classIsNotFull && classScheduleDoesNotConflict;

    alert(studentEnrolled)





//A product offer can be applied only if a person buys more than 2 items,
// and the offer has not expired. Premium members do not need to buy a
// specific amount of products.

let numberOfItems = prompt("How many items are you purchasing?")

let offerNotExpired = confirm("Is product expired? If no click 'Ok'");
let isPremiumMember = confirm("Are you a Premium member? If yes click 'Ok'");

let productDiscountApplied = offerNotExpired && isPremiumMember && numberOfItems >= 2;

    alert(productDiscountApplied)







