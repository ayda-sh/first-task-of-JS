// 1 - Create a function that checks if a number is prime. 

let i = 2;
function prime(num) {
    if(num <= 1) {
        console.log("Number is not prime");
        return;
    } else if(num % i === 0) {
        console.log("Number is not prime");
        return;
    } else {
        console.log("Number is prime");
    }
}

prime(5)



// 2 - Create a function that converts time from 24-hour format to 12-hour format

function to12Hour(h) {
    if(h < 0 || h > 24) {
        console.log("Invalid");
    } else if( h === 0) {
        console.log(12);
    } else if (h >= 13 && h < 24) {
        console.log((h - 12));
    }
}

to12Hour(13)


// 3 - Write a function that checks if a number is within a specified range. 

function inRange(min, num, max) {
    if( num > min && num < max) {
        console.log("Number is in the specified range");
    } else {
        console.log("Number is not in the specified range");
    }
}

console.log(inRange(30, 500, 95))


// 4 - Create a function that calculates Body Mass Index (BMI) and....

function bmi(w, h) {
    const bmi = w / (h ** 2) * 10000;
    if (bmi <= 18.5) {
        console.log("Underweight");
    } else if (bmi > 18.5 && bmi < 24.9) {
        console.log("NormalWeight");
    } else if (bmi > 25.0 && bmi < 29.9) {
        console.log("OverWeight");
    } else {
        console.log("Obesity");
    }
}

bmi(57, 165)



// 5 - Create a function that checks if a year is a leap year

function leapYear(y) {
    if (y % 4 === 0 && y % 100 !== 0 || y % 400 === 0) {
        console.log("Its a leap year");
    } else {
        console.log("Not a leap year");
    }
}

leapYear(2022)



// 8 - Create a function that reverses a given string.

const hello = "hello"
function toReverse(content) {
    console.log(content.split('').reverse().join(''));
}

toReverse(hello)