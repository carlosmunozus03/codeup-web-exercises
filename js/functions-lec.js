"use strict";

//inmediately invoke function expression (IFEE's)
(function() {
    console.log('Hello word');

    console.log(parseInt('17 dors.'));
    var whatIsTheWord = prompt('What is toy favorite, work appropiate word?');
    console.log(whatIsTheWord);

// let's define a function
    function doTheThin(input) {
        var ouput = input + " was pulled into the function. Now it is this concatenated string.";
        return ouput;
    }

    console.log(doTheThin("hot Dog"));

    function addStuff(x, y) {
        return x + y;
    }

    console.log(addStuff(15, 32));

// let's make "BAD function
    function logToConsole(info) {
        return console.log(info + " is something important to keep in mind.");
    }

    var needThisForLater = logToConsole('bengal tigers are undangered');
    console.log(needThisForLater);

// In defense od console.logging during functions
    function addingToString(string) {
        var finalString = string + ' is a string.'
        // console.log(typeof finalString)
        finalString += ' And if it was not originally a string it sure is now';
        // console.log(finalString)
        return finalString;
    }

    alert(addingToString('antelope'));

// Global vs Local Variables

    var global = 'Earth';
    var local = 'Geoff';
    console.log(global);

    function getGlobalAndLogIt() {
        var local = 'Neptune';
        console.log(global);
        console.log(local);
    }

    getGlobalAndLogIt();
    console.log(local);

// Another way to define functions

    var coolGuyFunction = function (string) {
        return string + ", but with sunglasses. B)";
    }

    console.log(coolGuyFunction('skunk'));
})();

console.log(coolGuyFunction('David Stephens'));

