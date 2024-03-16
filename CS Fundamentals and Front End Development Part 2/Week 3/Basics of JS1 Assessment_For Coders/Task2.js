/*
----------------------------- Task 1 -----------------------------
Write a program that determines the type of triangle based on the 
lengths of its sides (`side1`, `side2`, and `side3`). 
The types of triangles are equilateral, isosceles, and scalene.
------------------------------------------------------------------
*/
console.log('Task 1');
var side1 = 5;
var side2 = 5;
var side3 = 8;
var triangleType;
if (side1 == side2 && side2 == side3) {
  console.log('Equilateral Triangle');
}
else {
  if (side1 == side2 || side2 == side3 || side1 == side3) {
    console.log('Isosceles Triangle');
  }
  else {
    console.log('Scalene Triangle');
  }
}
/*
----------------------------- Task 2 -----------------------------
Write a JavaScript program that counts the number of occurrences
of a specific element in an array using a for...of loop.
------------------------------------------------------------------
*/
console.log('Task 2');
function countOccurrences(arr, target) {
  //COMPLETE THE CODE HERE
  let count = 0;
  for (let element of arr) {
    if (element === target) {
      count++;
    }
  }
  return count;
}
var numbers = [1, 2, 3, 2, 4, 2, 5];
console.log(countOccurrences(numbers, 2));
console.log(countOccurrences(numbers, 1));
console.log(countOccurrences(numbers, 3));
console.log(countOccurrences(numbers, 5));
/*
----------------------------- Task 3 -----------------------------
Write a function that takes an array of product prices and returns 
the total price.
------------------------------------------------------------------
*/
console.log('Task 3');
function calculateTotalPrice(prices) {
  let total = 0;
  for (let price of prices) {
    total += price;
  }
  return total;
}
var productPrices = [10, 20, 30, 40];
console.log(calculateTotalPrice(productPrices));
/*
----------------------------- Task 4 -----------------------------
Write a function that takes an array of product prices and a 
discount percentage. Apply the discount to each product price and 
return the updated prices as an array.
------------------------------------------------------------------
*/
console.log('Task 4');
function applyDiscount(prices, discount) {
  if (discount < 0 || discount > 100) {
    return "Discount percentage must be between 0 and 100";
  } else {
    let discountedPrices = [];
    for (let price of prices) {
      discountedPrices.push(price - (price * discount / 100));
    }
    return discountedPrices;
  }
}
var productPrices      = [10, 20, 30, 40];
var discountPercentage = 20;
console.log('Prices            ' + productPrices + '\n' +
  'Discount          ' + discountPercentage + '\n' +
  'Discounted Prices ' + applyDiscount(productPrices, discountPercentage));

/*
----------------------------- Task 5 -----------------------------
Write a function that takes an array of product quantities and 
returns an array of indices for products that are out of stock 
(quantity is 0).
------------------------------------------------------------------
*/
console.log('Task 5');
function getOutOfStockProducts(quantities) {
  if (quantities.length == 0) {
    return "No products available";
  } else {
    let outOfStock = [];
    for (let i = 0; i < quantities.length; i++) {
      if (quantities[i] == 0) {
        outOfStock.push(i);
      }
    }
    return outOfStock;
  }
}
var productQuantities = [2, 0, 4, 0, 3];
console.log(getOutOfStockProducts(productQuantities));
/*
----------------------------- Task 6 -----------------------------
Print the multiplication table of 7
It should be in the format: 
7 * 1 = 7
------------------------------------------------------------------
*/
console.log('Task 6');
for (let i = 1; i <= 10; i++) {
  console.log('7 * ' + i + ' = ' + 7 * i);
}
/*
----------------------------- Task 7 -----------------------------
Create a function to calculate factorial of a number.
Assume that the input is an integer
Example: Factorial of 5 = 120
------------------------------------------------------------------
*/
console.log('Task 7');
function calculateFactorial(n) {
  if (n < 0) {
    return "Input must be a positive integer";
  } else {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  }
}
console.log(calculateFactorial(0));     // Should print 1
console.log(calculateFactorial(5));     // Should print 120
console.log(calculateFactorial(10));    // Should print 3628800
console.log(calculateFactorial(-1));    // Should print "Input must be a positive integer"
/*
----------------------------- Task 8 -----------------------------
Create a function to generate fibonacci series. 
Fibonacci Series is a sequence of numbers in which each number 
is the sum of the two preceding ones. It starts with 0 and 1.
The number of terms of the series should be passed as argument 
to the function.
Example: Fibonacci series of 5 terms => 0 1 1 2 3 
Assume that the inputs are positive integers
------------------------------------------------------------------
*/
console.log('Task 8');
function generateFibonacciSeries(numTerms) {
  if (numTerms < 1) {
    return "Input must be a positive integer";
  } else {
    if (numTerms == 1) {
      return [0];
    }
    var series = [0, 1];
    for (let i = series.length; i < numTerms; i++) {
      series.push(series[i - 1] + series[i - 2]);
    }
    return series;
  }
}
console.log(generateFibonacciSeries(0));   // Should print "Input must be a positive integer"
console.log(generateFibonacciSeries(1));   // Should print [0]
console.log(generateFibonacciSeries(5));   // Should print [0, 1, 1, 2, 3]
console.log(generateFibonacciSeries(10));  // Should print [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
/*
----------------------------- Task 9 -----------------------------
Create a function to print a star-pattern triangle 
The function should take number of rows as an argument
Assume that the argument passed is a positive integer
The pattern should appear as follows for input = 5
 *
 * *
 * * *
 * * * *
 * * * * *
------------------------------------------------------------------
*/
console.log('Task 9');
function printTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
      pattern += '* ';
    }
    console.log(pattern);
  }
}
printTriangle(5);
printTriangle(7);
/*
----------------------------- Task 10 -----------------------------
Create a function to reverse a string. 
Pass a string as an argument.
Assume that the argument is always a string.
-------------------------------------------------------------------
*/
console.log('Task 10');
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello, World!"));  // Should print "!dlroW ,olleH"
console.log(reverseString("12345"));          // Should print "54321"
console.log(reverseString(""));               // Should print ""