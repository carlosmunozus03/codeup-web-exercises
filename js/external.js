//console.log('Hello from external JavaScript');
//alert('Welcome to my Website!');
//var color = prompt('What is your favorite color?');
//alert('Awesome, ' + color + ' is my favorite color too!');
//var number = prompt('Hey, give me a number!');
//alert('Cool, three times of your number is: ' + (number * 3) + '.');
//var place = confirm('Do you want continue talking?');
//alert('Ok!');
//console.log(place);
//var lMRentInDay = 3;
//var bBRentalInDay = 5;
//var hercRentalInDay = 1;
//var rentalRate = 3;
//var totalDue = (lMRentInDay + bBRentalInDay + hercRentalInDay) * rentalRate;

//var googleRate = 400;
//var amazonRate = 380;
//var fBRate = 350;
//var googleHours = 6;
//var amazonHours = 4;
//var fBHours = 10;
//var totalPay = (googleHours + googleRate) + (amazonHours + amazonRate) + (fBHours + fBRate);

//var classSize = 40;
//var studentsSignedUp = 27;
//var classTime = '7:30';
//var classStartTimes = ['7:30','10','2:30'];
//var haveClassAt9 = false;
//var classFull = false;
//var canRegister = !(haveClassAt9 || classFull);

//var offerValid = true;
//var boughtAtLeastTwo = true;
//var premiumMember = true;
//var canGasDiscount = (premiumMember || boughtAtLeastTwo) && offerValid;

//var userName = 'codeup';
//var password = 'notstrongpassword';
//var passwordLongEnough = password.length >= 5;
//var passNotContainUser = !password.includes(userName);
//var usernameNotTooLong = userName.length <=20;
//var noWhiteSpace = (userName === username.length()) && (password === pasword.length());

//exercises 3.1

var lMRental = Math.ceil(parseFloat(prompt('How many days your renting the Little Mermaid')));
var bBRental = Math.ceil(parseFloat(prompt('how many days you renting Brother Bear')));
var hercRental = Math.ceil(parseFloat(prompt('How many days renting Hercules')));
var rentalPrice = 3;
var rentalTotal = (lMRental + bBRental + hercRental) * rentalPrice;

alert("You're final total is: $" + rentalTotal.toFixed(2) + "Have a good Day!");

// exercise part 2

var googleRate = parseFloat(prompt('How much does Google pay per hour?'));
var googleHours = parseFloat(prompt('How many hours did you work for Google this week?'));
var amazonRate = parseFloat(prompt('How much does Amazon pay per hour?'));
var amazonHours = parseFloat(prompt('How many hours did you work for Amazon this week?'));
var fBRate = parseFloat(prompt('How much does FaceBook pay per hour?'));
var fBHours = parseFloat(prompt('How many hours did you work for Facebook this week?'));

alert("Wow you got paid $" + ((googleRate * googleHours) + (amazonRate * amazonHours)+ (fBRate * fBHours).toFixed(2) + ". Wicked work, my dude!"));

// Exercise part 3

var classHasRoom = confirm("Hey, is there room in Fluker's Intro to Mass Media Class?");
var noScheduleConflict = confirm("Can you take a class at 8 AM?");

alert("You can has class: " + (classHasRoom && noScheduleConflict));

// Exercise part 4

var isOfferValid = confirm("Are we still running that promo on fish sticks coupon");
var isPremiumMember = confirm("Does the customer have their Randall's card?");
var amountBought = parseFloat(prompt("How many bags of fish sticks are they buying?"));

alert("Customer qualifies for promo: " + (((isPremiumMember || amountBought >= 2 ) && isOfferValid) && amountBought > 1 + "."));




