numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

for (var i = 0; i <= numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        console.log('Fizz');
    } else if (numbers[i] % 5 === 0) {
        console.log('Buzz');
    } else if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
        console.log('FizzBuzz');
    } else {
        console.log(numbers);
    }
}
