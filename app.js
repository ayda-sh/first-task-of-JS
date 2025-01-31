// 1 Create a function that checks if a number is prime. 

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



// 2 Create a function that converts time from 24-hour format to 12-hour format

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

// 3 Write a function that checks if a number is within a specified range. 

