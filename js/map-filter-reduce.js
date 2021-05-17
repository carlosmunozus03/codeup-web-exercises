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