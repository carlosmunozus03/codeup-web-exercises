var slices = 8
while (slices > 0) {
    console.log("I'll have slices");
    slices = slices - 1;
    if (slices > 1) {
        console.log('Now is there ' + slices + ' slices pizza left');
    } else {
        console.log('now is there ' + slices + ' slices pizza left')
        if (slices <= 2) {
            console.log('Pizza is almost done!!!');
        }
    }
    console.log("now there's " + slices + " slices left!");
}
console.log('no more pizza :(');


var slices = 8;
while (slices > 0) {
    console.log("I'll have a slice!");
    slices = slices - 1;
    if (slices > 1) {
        console.log("Now there's " + slices + " slices left!");
    } else {
        console.log("Now there's " + slices + " slice left!");
    }
    if (slices <= 2) {
        console.log("The pizza is almost done ...");
    }
}
console.log("No more pizza :(");

// What is PseudoCode?
//
// Ask the user input
// Get the user input
// Declare a user input variable
// Store user input in the variable
// Declare a variable to store the total (accumulator)
// Add the cost of the new item to the total
// Keep storing the new totals in the accumulator
// tell the user how to end the program (sentinel value)
// Loop back around and do it again, over and over, until the user tells stop

var priceOfItem = parseFloat(prompt("Enter the price of your first item"));
alert("The price of your item was " + priceOfItem);
// create accumulator variable
var totalCost = priceOfItem;
var userInput = "";
// create a sentinel value
while (userInput !== "STOP") {
    userInput = prompt("Enter the price of your next item \r\n\ Enter STOP when you are done");
    if (userInput === "STOP") {
        alert("OK. Your final total is " + totalCost);
    } else {
        priceOfItem = parseFloat(userInput);
        totalCost = totalCost + priceOfItem;
        alert("Your total is now " + totalCost.toFixed(2));
    }
}

var i = 1;
while (i < 65536) {
    i *= 2;
    console.log(i);
}


var allCones = Math.floor(Math.random() * 50) + 50;
var conesBought = Math.floor(Math.random() * 5) + 1;
do {
    var conesBought = Math.floor(Math.random() * 5) + 1;
    if (conesBought > allCones) {
        console.log("I cant sell " + conesBought + " I only have  " + allCones + " left sorry");
    } else {
        allCones -= conesBought;
        console.log("Cones Sold " + conesBought + " I have " + allCones + " left to sell");
    }
} while (allCones > 0);
var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var conesBought = Math.floor(Math.random() * 5) + 1;
    if (conesBought > allCones) {
        console.log('I cannot sell ' + conesBought + ' I have ' + allCones + ' Im Sorry');
    } else {
        allCones -= conesBought;
        console.log('I can sold ' + conesBought + ' I have ' + allCones + ' !');
    }
} while (allCones > 0);

// Write a loop that outputs the first 50 fibonacci numbers.
// https://en.wikipedia.org/wiki/Fibonacci_number
// Recommend starting your loop at 1 and ending your loop once you've calculated 50 fibonacci numbers.
// Write the code necessary to output the first 50 prime numbers
// Recommend starting your loop at 1 and ending your loop once you've calculated 50 primes.
// https://en.wikipedia.org/wiki/Prime_number