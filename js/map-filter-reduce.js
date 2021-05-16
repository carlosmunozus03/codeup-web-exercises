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
// let moreLanguages = users.filter(function (user) {
//     return user.languages.length >= 3;
// });
// console.log(moreLanguages)
//

let triLang = users.filter(x => x.languages.length >= 3);
console.log(triLang);

// let triLang = users.filter(function (x) {
//     return users.languages.length > 2;
// });

let newEmail = users.map(x => x.email);
console.log(newEmail);

let totalExperience = users.reduce((x, y) => x.yearsOfExperience + y.yearsOfExperience, 0);
console.log(totalExperience);

