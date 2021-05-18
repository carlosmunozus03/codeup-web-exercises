const username = fetch('https://api.github.com/users', {headers: {'Authorization': YOUR_TOKEN_HERE}});
console.log(username);

// function remove9s(arr) {
//     var no9s = [];
//     arr.forEach(function (element) {
//         if (element !== 9) {
//             no9s.push(element);
//         }
//     });
//     return no9s;
// }

function remove9s(arr) {
    var no9s = [];
    arr.forEach(function (a) {
        if (a !== 3 && a !== 6) {
            no9s.push(a)
        }
    });
    return no9s;
}


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(remove9s(arr))
