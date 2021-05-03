"use strict";

//alert('Welcome to my website!');
//var favoriteColor = prompt('What is you favorite color?');
//alert('WOW, my favorite color is ' + favoriteColor + ' too.');
//console.log(favoriteColor);

//You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
//alert("Welcome to Buddy's, rental movies.");
//alert('Rental cost is $3 per day');
//var priceOfRent = 3;
//console.log(priceOfRent);
//var lMRentDays = Math.ceil(parseFloat(prompt('How many days would you like rent the Little Mermaid?')));
//console.log(lMRentDays);
//var bBRentDays= Math.ceil(parseFloat(prompt('How many days would you like rent the Brother Bear?')));
//console.log(bBRentDays);
//var hCRentDays = Math.ceil(parseFloat(prompt('How many days would you like rent the Hercules?')));
//console.log(hCRentDays);
//var totalRentPay = (lMRentDays + bBRentDays + hCRentDays) * priceOfRent;
//console.log(totalRentPay);
//alert('Congratulations, your order is done! Total due is $' + totalRentPay + '. Thank you!');

//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
//var googlePay = parseFloat(prompt('How much Google pay to you for hour?'));
//console.log(googlePay);
//var googleHours = parseFloat(prompt('How many days do you work for Google this week?'));
//console.log(googleHours);
//var amazonPay = parseFloat(prompt('How much Amazon pay to you for hour?'));
//console.log(amazonPay);
//var amazonHours = parseFloat(prompt('How many days do you work for Amazon this week?'));
//console.log(amazonHours);
//var fBPay = parseFloat(prompt('How Much FB pay to you this week?'));
//console.log(fBPay);
//var fBHours = parseFloat(prompt('How many hours do you work for FB this week?'));
//console.log(fBHours);
//var totalWorkRate = (googlePay * googleHours) + (amazonPay * amazonHours) + (fBPay * fBHours);
//console.log(totalWorkRate);
//alert('Cool, you earn $'  + totalWorkRate + ' this week. Keep working!');

//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
//var classHasSpot = confirm('Is there spot in the AV class?');
//console.log(classHasSpot);
//var scheduleConflict = confirm('Do you have conflict with your schedule at 10:45 AM?')
//console.log(scheduleConflict);
//var canHaveClass = classHasSpot && !scheduleConflict;
//console.log(canHaveClass);


//A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
//var buyProduct = parseFloat(prompt('How many Bags do you bought?'));
//console.log(buyProduct);
//var offerNotExpired = confirm('Do you have the Offer Coupon?');
//console.log(offerNotExpired);
//var premiumMember = confirm('Are you premium member?');
//console.log(premiumMember);
//var getAnOffer = (buyProduct > 2 && offerNotExpired) ||(offerNotExpired && premiumMember);
//console.log(getAnOffer);


//Create a variable that holds a boolean value for each of the following conditions:
//var username = 'codeup';
//var password = 'notastrongpassword';
//the password must be at least 5 characters
// the password must not include the username
// the username must be no more than 20 characters
// neither the username or password can start or end with whitespace
//var passwordChar = password.length > 5;
//console.log(passwordChar);
//var passwordNotIncludes = password.includes(username);
//console.log(passwordNotIncludes);
//var usernameNotTooLong = username.length < 20;
//console.log(usernameNotTooLong);
//var userAndPassNotSpace = username.trim() && password.trim();
//console.log(userAndPassNotSpace);

// objects practice

//var shoppers = [
//   {name: 'Cameron', amount: 180},
//   {name: 'Ryan', amount: 250},
//   {name: 'George', amount: 320}
//;
//hoppers.forEach(function (shopper) {
//   if(shopper.amount > 200) {
//       var percentOff = shopper.amount * 0.12;
//       console.log(shopper.name + ' congrats you have a discount coupon for 12% off! the total amount is $' + shopper.amount.toFixed(2) + '. But whit the 12% off, you total amount now is: $ ' + (shopper.amount - percentOff).toFixed(2));
//   } else {
//       console.log(shopper.name + '! Im sorry, you do not have a discount ' + 'You total amount is ' + shopper.amount + '.');
//   }
//);

//Cree una función nombrada showMultiplicationTableque acepte un número y console.logs la tabla de multiplicar para ese número (simplemente multiplique por los números del 1 al 10)
//
// Por ejemplo, showMultiplicationTable(7)debería generar

// function showMultiplicationTable(x) {
//     for (var i = 1; i <= 10; i++) {
//         console.log(x + ' * ' + i + ' = ' + x * i);
//     }
// }
//
// //console.log(showMultiplicationTable(2));
//
// for (var i = 20; i <= 200; i++) ;
// var random = Math.floor(Math.random() * 180) + 20;
// if (random % 2 === 0) {
//     console.log(random + ' Is a Even Number');
// } else {
//     console.log(random + ' is Odd Number');
// }

var sample = "Hello Codeup";
console.log(sample.length);
console.log(sample.toUpperCase(sample));
var newSampleStudents = sample + ' Students';
console.log(newSampleStudents);
console.log(newSampleStudents.replace('Students', 'Class'));
console.log(newSampleStudents.indexOf('c'));
console.log(newSampleStudents.indexOf('C'));
console.log(newSampleStudents.substring(6, 12));
console.log(newSampleStudents.substring(newSampleStudents.indexOf("C"), newSampleStudents.indexOf("p") + 1));
