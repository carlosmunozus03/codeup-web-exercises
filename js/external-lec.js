"Use strict";

//var message = "Howdy y'all!"

//var whatIsThisThen = message + " Hope y'all are having a mighty fine Thursday."

//console.log(whatIsThisThen);

//var favoriteCheese = prompt("what is you favorite cheese?");

//console.log(favoriteCheese + 'happens to be their cheese.Huzaah!');

//var typeOfPrompt = typeof prompt("Tell me something");

//console.log(typeOfPrompt);

//var num = parseFloat(prompt('Gimme a number...'));

//console.log('user entered ' + num + '. That number doubled is: ' + (num * 2) + '.');

//var canIGOToToysRUs = confirm("can i go to Toys 'R Us pwease ");

//console.log(canIGOToToysRUs);

//var valueOfThis = alert('Your looking at a website!');

//console.log(valueOfThis);

var lMRentInDay = 3;
var bBRentalInDay = 5;
var hercRentalInDay = 1;
var rentalRate = 3;
var totalDue = (lMRentInDay + bBRentalInDay + hercRentalInDay) * rentalRate;

var googleRate = 400;
var amazonRate = 380;
var fBRate = 350;
var googleHours = 6;
var amazonHours = 4;
var fBHours = 10;
var totalPay = (googleHours + googleRate) + (amazonHours + amazonRate) + (fBHours + fBRate);

var classSize = 40;
var studentsSignedUp = 27;
var classTime = '7:30';
var classStartTimes = ['7:30','10','2:30'];
var haveClassAt9 = false;
var classFull = false;
var canRegister = !(haveClassAt9 || classFull);

var offerValid = true;
var boughtAtLeastTwo = true;
var premiumMember = true;
var canGasDiscount = (premiumMember || boughtAtLeastTwo) && offerValid;

var userName = 'codeup';
var password = 'notstrongpassword';
var passwordLongEnough = password.length >= 5;
var passNotContainUser = !password.includes(userName);
var usernameNotTooLong = userName.length <=20;
var noWhiteSpace = (userName === username.length()) && (password === pasword.length());
