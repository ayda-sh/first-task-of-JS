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


