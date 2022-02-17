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