(() => {
"use strict"
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

// 2. Use .filter to create an array of user objects where each
// user object has at least 3 languages in the languages array.
    const atLeastThreeLanguages = users.filter(user => user.languages.length >= 3);
    console.log(atLeastThreeLanguages);


// 3. Use .map to create an array of strings where each element is a user's email address
let usersEmailArray = users.map(user => {
    return user.email
})
console.log(usersEmailArray)


// 4. Use .reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.
const totalYearsOfExperience = users.reduce((accumulator, user, index) => {
    accumulator += user.yearsOfExperience
    return accumulator / users.length

}, 0);
console.log()



// 5. Use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce((accumulator, user ) => user.email.length > accumulator.length ? user.email : accumulator,'')
    console.log(longestEmail)



// 6.  Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const listOfUsers = users.reduce((accumulator, user)=> {
    if (user === users[users.length - 1]){
        accumulator += `and ${user.name}.`
    } else {
        accumulator += `${user.name}, `
    }
        return accumulator;
}, 'Your instructors are: ');
    console.log(listOfUsers);

// Bonus
// Use .reduce to get the unique list of languages from the list of users.
const listOfLanguages = users.reduce((accumulator , user) => {
    for (let language of user.languages ) {
        if (!accumulator.includes(language)) {
            accumulator.push(language)
        }
    }
            return accumulator
}, [])

console.log(listOfLanguages)




})();