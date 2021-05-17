const username = fetch('https://api.github.com/users', {headers: {'Authorization': YOUR_TOKEN_HERE}});
console.log(username);