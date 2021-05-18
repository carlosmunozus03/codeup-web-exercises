const userLastCommit = username => fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${GITHUB_ACCESS_TOKEN}`}})
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        let lastPush;
        for (let event of data) {
            if (event.type === 'PushEvent') {
                lastPush = new Date(event.created_at);
                break;
            }
        }
        console.log(lastPush);
    });


userLastCommit('carlosmunozus03');

//wait

const wait = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
wait(5000).then(() => console.log('You\'ll see this after 5 seconds'));
// console.log(username);
//
// //here no work
// const getData = () => {
//     return username
// }
// console.log(getData());
//
// // here work
// const getDataTime = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(username);
//         }, 1000);
//     });
// }
// // console.log(getDataTime());
// getDataTime().then((username) => console.log(username));
//
//
// ///// other exercise
//
// const sayHello = new Promise((resolve, reject) => {
//     resolve('hello');
//     reject('no see this');
// });
// console.log(sayHello)
// sayHello.then(function (response) {
//     console.log('the promise is resolve ', response);
// }).catch(function (error) {
//     console.log('the promise it no work and it a ', error);
// }).finally(function () {
//     console.log('the end');
// });

//here is the work

