"use strict";

// While loops

// The pizza loop

// var slices = 8;
// while (slices > 0) {
//     console.log("I'll have a slice!");
//     slices = slices - 1;
//     if (slices > 1){
//         console.log("Now there's " + slices + " slices left!");
//     } else {
//         console.log("Now there's " + slices + " slice left!");
//     }
//     if (slices <= 2) {
//         console.log("The pizza is almost done ...");
//     }
// }
// console.log("No more pizza :(");

// var counter = 20;
// while (counter >= 0){
//     console.log(counter);
//     counter = counter -1;
// }

// Pseudocode

// Ask the user input
// Get the user input
// Declare a user input variable
// Store user input in the variable
// Declare a variable to store the total (accumulator)
// Add the cost of the new item to the total
// Keep storing the new totals in the accumulator
// Tell the user how to end the program (sentinel value)
// Loop back around and do it all again, over and over, until the user tells to stop

// The price accumulator loop

// var priceOfItem = parseFloat(prompt("Enter the price of your first item"));
// alert("The price of your item was " + priceOfItem);
// // create accumulator variable
// var totalCost = priceOfItem;
// var userInput = "";
// // create a sentinel value
// while(userInput !== "STOP") {
//     userInput = prompt("Enter the price of your next item \r\n\ Enter STOP when you are done");
//     if (userInput === "STOP"){
//         alert("OK. Your final total is " + totalCost);
//     } else {
//         priceOfItem = parseFloat(userInput);
//         totalCost = totalCost + priceOfItem;
//         alert("Your total is now " + totalCost.toFixed(2));
//     }
// }

// Exponents Loop

// var num = prompt("What number do you want to start with?");
// var originalNumber = num;
// var exponent = 2;
// console.log("The powers of " + num + " are:");
// while (exponent <= 16) {
//     num = num * originalNumber;
//     console.log(originalNumber + " to the power of " + exponent + " = " + num);
//       //console.log(num);
//     exponent = exponent + 1
// }

// Simple *2 multiplication loop

// var increase = 1;
// while(increase <= 65536) {
//    increase = increase * 2;
//     console.log(increase);
// }

// DO-WHILE LOOPS

// The guessing game

// var number = Math.floor(Math.random() * 6) +1;
// var guess;
// do {
//     guess = parseInt(prompt("Enter a number between 1 and 6"));
// } while (guess !== number);
//
// alert("Your guess of " + guess + " matches the number " + number + "!");

// Ice Cream Loop

var allCones = Math.floor(Math.random() * 50) + 50;
//
// do {
//     var conesBought = Math.floor(Math.random() * 5) + 1;
//     console.log(conesBought + " cones sold");
//
//     if (conesBought > allCones){
//         console.log("Cannot sell you " + conesBought + " cones I only have " + allCones);
//     }
//     allCones = allCones - conesBought;
// } while (allCones > 0);
// console.log("Yay! I sold them all!");

// Zoom Room 4's solution to the Ice Cream Cone loop as presented by Naysa
// do {
//     var conesBought = Math.floor(Math.random() * 5) + 1;
//     if (conesBought > allCones) {
//         console.log("I cant sell " + conesBought + " I only have  " + allCones + " left sorry");
//     } else {
//         allCones = allCones - conesBought;
//         console.log("Cones Sold " + conesBought + " I have " + allCones + " left to sell");
//     }
// } while (allCones > 0);
// console.log("Yay! I sold them all!");

// FOR LOOPS

// var count = 0;
// while (count <= 100){
//     console.log(count);
//     count = count +1;
// }
//
// for (var count = 0; count <= 100; count = count+1){
//     console.log(count);
// }

// for (var i = 0; i<=100; i++){
//     console.log(i);
// }