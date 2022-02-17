"use strict"

let shapes = ["square", "circle", "triangle", "rectangle"];

for (var i = 0; i < shapes.length; i++) {
    console.log("The following shapes is " + shapes[i] + " in the index " + i);
}
;

console.log("----------------------");

shapes.forEach(function (shape, index) {
    console.log("shapes is " + shape + " and the index " + index);
});

shapes.unshift("hexagon");
console.log(shapes);
shapes.push("oval", "diamond");
console.log(shapes);

shapes.forEach(function (shape, index) {
    console.log("The next shape is " + shape + " and the index " + index);
});
shapes.shift();
console.log(shapes);
shapes.pop();
console.log(shapes);

//Object

const car = [{
    make: "Totoya",
    model: "Camry",
    features: ["Automatic windows", "Bluetooth", "GPS"],
    owner: {
        name: "Carlos Munoz",
        age: 32
    },
},
    {
        make: "Honda",
        model: "Accord",
        features: ["Automatic windows", "Bluetooth", "AFM Radio"],
        owner: {
            name: "Marilyn Long",
            age: 25
        }
    }];
console.log(car);

console.log(car);


//Count specific vocals function only lowercase
function charCount(sentence, letter) {
    let letterCount = 0;
    for (let position = 0; position < sentence.length; position++) {
        if (sentence.charAt(position) === letter) {
            letterCount += 1;
        }
    }
    return letterCount;
}

console.log(charCount("A big fat lazy dog jumped over the moon", "a"));

//Next problem
const {a: b = 11, c = 6} = {a: 3};
console.log("The value of b is: " + b + " and the value of c is: " + c);

//Add a new properties to an already exist object
const becky = {firstName: "Becky", lastName: "Smith"};
console.log(becky);
becky.age = 20;
console.log(becky);



let numbers = [-100, 10, 15, -20, 200];
console.log(numbers)
numbers.sort();
console.log(numbers);

// for (let i = 1; i <= 200; i++) {
//     if (i % 3 === 0) {
//         console.log(i)
//     }
// }

const person1 = {
    name: 'Jamie',
    age: 24,
    colorEye: 'green',
    idNumber: 5000
};
console.log(person1);

