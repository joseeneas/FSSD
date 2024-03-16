// 1. Write a JavaScript program that prints the numbers from 1 to 10 using a for loop.

for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Write a JavaScript program that calculates the sum of all numbers from 1 to a given number using a while loop.

var n = 10;
var sum = 0;
var i = 1;

while (i <= n) {
  sum += i;
  i++;
}
console.log(sum);

// 3. Write a JavaScript program that prints the even numbers from 1 to 20 using a do-while loop.

var i = 1;

do {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
} while (i <= 20);

// 4. Write a JavaScript program that iterates through each number of an array using for..of loop and computes the sum of squares of each of these numbers.

const numbers = [5, 10, 15, 20];
let sum = 0;
for (const number of numbers) {
  sum += number;
}
console.log("The sum of the numbers is:", sum);


// 5. Write a JavaScript program to iterate through the properties of the object using for...in loop.

const person = {
  name: 'Alice',
  age: 30,
  occupation: 'Engineer',
}
for (const property in person) {
  console.log(property + " : " + person[property]);
}
