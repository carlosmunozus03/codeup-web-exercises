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
console.log(users);
// 2.-Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let triLang = users.filter(x => x.languages.length >= 3);
console.log(triLang);

// 3.-Use .map to create an array of strings where each element is a user's email address
let newEmail = users.map(x => x.email);
console.log(newEmail);

//4.- Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let experience = users.map(x => x.yearsOfExperience);
console.log(experience);

let totalExperience = experience.reduce((x, y) => x + y, 0);
console.log(totalExperience);

// other way
let totalYears = users.reduce((a, b) => a + b.yearsOfExperience, 0);
console.log(totalYears)

//5.- Use .reduce to get the longest email from the list of users.

// let longEmail = Math.max(...users.map(x => x.email.length));
// console.log(longEmail);
//
// let names = users.map(x => x.name);
// console.log(names);
//
// let nameList = names.reduce((x, y) => x + y, [].toString());
// console.log(nameList);

var longest = users.reduce(function (a, b) {
    return a.email.length > b.email.length ? a : b;
}).email;
console.log(longest);

let longestUserEmail = users.reduce((a, b) => {
    return a.length > b.email.length ? a : b.email;
});
console.log(longestUserEmail);

//6.-
//first
let names = users.reduce((a, b) => {
    a.push(b.name);
    return a;
}, []);
console.log(names);

//second
let usersString = users.reduce((a, b, c) => {
    return c === 0 ? b.name : a + ", " + b.name;
}, "");
console.log("The instructors are: " + usersString);

//done

//HERE FOR STUDY


//
// //Use .map to create an array of strings where each element is a user's email address
// // es5
// let emails = users.map(function(user){
//     user = user.email;
//     return user;
// });
// console.log(emails);
// // es6
// let es6emails = users.map(user => user.email);
//
// //Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
//
// let trilinguals = users.filter(function(user){
//     return user.languages.length >= 3;
// });
//
// //Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
//
// // es5
// let totalYearsOfExperience = users.reduce(function(total, user){
//     let yearsOfExperience = user.yearsOfExperience;
//     return total + yearsOfExperience;
// }, 0);
//
// console.log(totalYearsOfExperience);
//
// // es6
// totalYearsOfExperience = users.reduce((total, user)=> total + user.yearsOfExperience, 0);
//
// console.log(totalYearsOfExperience);
//
// //Use .reduce to get the longest email from the list of users.
//
// // let emailsViaReduce = users.reduce(function(accumulator, user){
// //     accumulator.push(user.email);
// //     return accumulator;
// // }, []);
//
// let longestEmail = users.reduce(function(accumulator, user, index, usersArray){
//     if (index === usersArray.length -1){
//         accumulator.push(user.email);
//         accumulator.sort(function(email1, email2){
//             return email2.length - email1.length;
//         });
//         return accumulator[0];
//     } else {
//         accumulator.push(user.email);
//         return accumulator;
//     }
// }, []);
//
// console.log(longestEmail);
//
// const longestEmailbyHannahPaterka = users.reduce((longest, current) =>
//     longest.email.length > current.email.length ? longest : current ).email;
//
// console.log(longestEmailbyHannahPaterka);
//
// const longestEmailByDavidCulver = users.reduce((longest, current) =>{
//     if(current.email.length > longest.email.length){
//         return current;
//     } else {
//         return longest;
//     }
// }).email;
//
// console.log(longestEmailByDavidCulver);
//
// // uses the emails array
// let longestUserEmailByMathewWalker = emails.reduce((a, b) => a.length > b.length ? a : b);
//
// console.log(longestUserEmailByMathewWalker);
//
// var longestEmailByDavidWagnon = users.reduce(function (a, b) {
//     return a.email.length > b.email.length ? a : b;
// }).email;
//
// console.log(longestEmailByDavidWagnon);
//
// //Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
//
// let names = users.reduce(function(accumulator, user){
//     accumulator.push(user.name);
//     return accumulator;
// }, []);
//
// let namesNicelyJoined = users.reduce(function(accumulator, user, index, usersArray){
//     if (index === usersArray.length - 1){
//         accumulator.push(user.name);
//         let niceJoin = accumulator.join(', ');
//         niceJoin = "Your instructors are: " + niceJoin + '.';
//         return niceJoin;
//     } else {
//         accumulator.push(user.name);
//         return accumulator;
//     }
// }, []);
//
// console.log(namesNicelyJoined);
//
// let usersStringByKarenValadez = users.reduce((accu, user, index) => {
//     return index === 0 ? user.name : accu + ", " + user.name;
// }, "");
// console.log("The instructors are: " + usersStringByKarenValadez);
//
// // Bonus
// // One possible approach
// let userLanguages = users.reduce(function(accumulator, user){
//     let listOfLanguages = accumulator.concat(user.languages);
//     //let uniqueLanguages = new Set(listOfLanguages);
//     return listOfLanguages;
// }, []);
//
// let uniqueLanguages = new Set(userLanguages);
// let uniqueLanguagesArray = Array.from(uniqueLanguages);
//
// console.log(userLanguages);
// console.log(uniqueLanguagesArray);
//
// // Joshua Williams' solution
//
// let uniqueArrayByJoshuaWilliams = users.reduce(function (nameArray, user, index, array) {
//     nameArray.push(...user.languages); //Using the .push(...Array) separates the array when we push it rather than pushing it normally, and using .push(Array), where we would get an array inside of an array.
//     // nameArray = nameArray.concat(user.languages); //Using the concat method we can combine arrays, back to back.
//     // nameArray = [...nameArray,...user.languages];
//     // console.log(nameArray);
//     if (index === array.length - 1) {
//         // return getUniqueValues(nameArray);
//         return [... new Set(nameArray)].sort(); // Set creates a new array with the unique values
//     } else {
//         return nameArray;
//         // return getUniqueValues(nameArray);
//     }
// }, []);
// console.log(uniqueArrayByJoshuaWilliams);
//
// // Javier's final solution
//
// userLanguages = users.reduce(function(accumulator, user){
//     let languages = user.languages;
//     for (let i = 0; i < languages.length; i++){
//         if (!accumulator.includes(languages[i])){
//             accumulator.push(languages[i]);
//         }
//     }
//     return accumulator.sort();
// }, []);
//
// console.log(userLanguages);