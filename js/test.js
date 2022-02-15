"use strict"

var shapes = ["square", "circle", "triangle", "rectangle"];

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

