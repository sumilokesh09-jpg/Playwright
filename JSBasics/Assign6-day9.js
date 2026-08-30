//Print all even numbers from 1 to 50

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//Assign 2 - Day 9 - Revere a number using for loop
let num = 1234;
let rev = 0;
for (let i = num; i > 0; i = Math.floor(i / 10)) {
    console.log(i);
    let rem = i % 10;
    console.log(rem);
    rev = rev * 10 + rem;
    console.log(rev);
}
console.log("The reverse of the number is: " + rev);

//Assign 3 - Day 9 - Check if a number is prime or not.
let num1 =7;
let isPrime = true;

if (num1 <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num1); i++) {
        console.log(i);
        if (num1 % i === 0) {
            console.log(num1 + " is not a prime number");
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(num1 + " is a prime number");
}
else {
    console.log(num1 + " is not a prime number");
}

//Assign- 4 - Day9- Check 121 is Palindrome Number 

let num2 = 121;
let rev1 = 0;
let rem;
let temp = num2;
//console.log("The number is: " + num2);
//console.log("The temp value is: " + temp);
for (let i = num2; i > 0; i = Math.floor(i / 10)) {
  //  console.log(i);
    rem = i % 10;
    console.log(rem);
    rev1 = rev1 * 10 + rem;
    console.log(rev1);
}
if (temp === rev1) {
    console.log("The number is palindrome");
} else {
    console.log("The number is not palindrome");
}   
//Assign 5 - Day 9 - Count number of digits in a number
let num3 = 12345;
let count = 0;
for (let i=num3; i > 0; i = Math.floor(i / 10)) {
    count++;
}
console.log("The number of digits in the number is: " + count);

//Assign 5 - Day 9 - Count number of digits in a number- version2 
let num4 = 12345;
let count1 = 0; 
while (num4 > 0)
{
    num4 = Math.floor(num4 / 10);
    count1 = count1 + 1;
}
console.log("The number of digits in the number is: " + count1);

//Assign 6 - Day 9 - Biggest digits in a number 58329
let num5 = 58329;
let bigNum = 0;
while (num5 > 0) {
    let rem = num5 % 10;
    num5 = Math.floor(num5 / 10);
    if (rem > bigNum) {
        bigNum = rem;
    }
}

//Assign 6 - Day 9 - Biggest digits in a number 58329- for loop
let num6 = 58329;
let bigNum1 = 0;
for (let i = num6; i > 0; i = Math.floor(i / 10)) {
    let rem1 = i % 10;
    if (rem1 > bigNum1) {
        bigNum1 = rem1;
    }
}
console.log("The biggest digit in the number is: " + bigNum1);
