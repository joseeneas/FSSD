// By : Jose Eneas da Silva Maria
// Created at March 17 2024
// ***---------- task 1 ----------***
//  Define 2 functions
// 1st function named as checkEven which will check if the num passed is even or not.
// 2nd function named as filterEvens which will take an array of numbers and 
// the checkEven function as arguments.
// This filterEvens function will filter out  only even numbers using the checkEven 
// function and generate a new array of the even numbers.
// ***---------- task 1 ----------***
function checkEven(num) {
    return num % 2 === 0;
}
function filterEvens(arr, checkEven) {
    var evenArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (checkEven(arr[i])) {
            evenArr.push(arr[i]);
        }
    }
    return evenArr;
}
console.log('***---------- task 1 ----------***');
console.log('Filter Even Numbers Expect Result: 2,4,6');
console.log('Filter Even Numbers Actual Result: ' + filterEvens([1, 2, 3, 4, 5, 6], checkEven));
console.log('***---------- task 1 ----------***');
// ***---------- task 1 ----------***


// ==================================


// ***---------- task 2 ----------***
// Write an IIFE that calculates the factorial of a given number and immediately logs the result to the console.
// ***---------- task 2 ----------***
(function factorial(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result *= i;
    }
    console.log('***---------- task 2 ----------***');
    console.log('Factorial of 5 Expect Result: 120');
    console.log('Factorial of 5 Actual Result: ' + result);
    console.log('***---------- task 2 ----------***');
}) (5);
// ***---------- task 2 ----------***

// ==================================

// ***---------- task 3 ----------***
// The product1 object (which is already given) consists of title, price and category information of Nike Shoes.
// The description() function describes the product using its properties.
// Your task is to create a product2 object which consists of the title, price and category information of Sony TV.
// Next, use the call() method to invoke the description() method of product1 on product2.
// This should display the details of product2 on the console. 
// ***---------- task 3 ----------***
var product1 = {
    title: 'Nike Shoes',
    price: 5000,
    category: 'Shoes',
    description: function () {
        console.log('Product1 Actual Result: ' + this.title + ', ' + this.price + ', ' + this.category);
    }
};
var product2 = {
    title: 'Sony TV',
    price: 50000,
    category: 'Electronics'
};
console.log('***---------- task 3 ----------***');
console.log('Product2 Expect Result: Nike Shoes, 5000, Shoes');
product1.description();
console.log('Product2 Expect Result: Sony TV, 50000, Electronics');
product1.description.call(product2);    
console.log('***---------- task 3 ----------***');
// ***---------- task 3 ----------***

// ==================================

// ***---------- task 4 ----------***
// Given an array of person objects, define a function to find oldest person object.
// ***---------- task 4 ----------***
persons = [{"name" : "Harry", "age" : 12}, {"name" : "Ron", "age" : 11}, {"name" : "Hermione", "age" : 13}]
function oldestPerson(persons) {
    var oldest = persons[0];
    for (var i = 1; i < persons.length; i++) {
        if (persons[i].age > oldest.age) {
            oldest = persons[i];
        }       
    }   
    return oldest;
}
console.log('***---------- task 4 ----------***');
console.log('Oldest Person Expect Result: Hermione, 13');
console.log('Oldest Person Actual Result: ' + oldestPerson(persons).name + ', ' + oldestPerson(persons).age);
console.log('***---------- task 4 ----------***');
// ***---------- task 4 ----------***

// ==================================

// ***---------- task 5 ----------***
// Create a function that calculates the sum of an array using IIFE function and returns it.
// ***---------- task 5 ----------***
var sum = (function (arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}) ([1, 2, 3, 4, 5]);
console.log('***---------- task 5 ----------***');
console.log('Sum of Array Expect Result: 15');
console.log('Sum of Array Actual Result: ' + sum);
console.log('***---------- task 5 ----------***');
// ***---------- task 5 ----------***

// ==================================

// ***---------- task 6 ----------***
// Write a function printContext that, when invoked, logs the this keyword to the console. Then, 
// demonstrate how the context of a function can change when calling it with different objects using the call method.
// ***---------- task 6 ----------***
function printContext() {

    console.log('Print Context Actual Result: ' + this);

}
console.log('***---------- task 6 ----------***');
console.log('Print Context Expect Result: Hello');
printContext.call('Hello');
console.log('Print Context Expect Result: 5');
printContext.call(5);
console.log('Print Context Expect Result: 1,2,3');
printContext.call([1, 2, 3]);
console.log('Print Context Expect Result: [object Object]');
printContext.call({name: 'John', age: 25});
console.log('***---------- task 6 ----------***');
// ***---------- task 6 ----------***

// ==================================

// ***---------- task 7 ----------***
// Create a function multiply that takes two parameters and returns their product. 
// Use the bind method to create a new function "double" that multiplies a single parameter by 2.
// ***---------- task 7 ----------***
function multiply(a, b) {
    return a * b;
}
var double = multiply.bind(this, 2);
console.log('***---------- task 7 ----------***');
console.log('Double Expect Result: 10');
console.log('Double Actual Result: ' + double(5));
console.log('***---------- task 7 ----------***');
// ***---------- task 7 ----------***

// ==================================

// ***---------- task 8 ----------***
// Create an object person with properties name and age. 
// Write a function "introduce" that logs a message introducing the person. 
// Then, use the call method to invoke the introduce function with the person object as the context.
// ***---------- task 8 ----------***
var person = {
    name: 'John',
    age: 25
};
function introduce() {
    console.log('Introduce Actual Result: My name is ' + this.name + ' and I am ' + this.age + ' years old.');
}
console.log('***---------- task 8 ----------***');
console.log('Introduce Expect Result: My name is John and I am 25 years old.');
introduce.call(person);
console.log('***---------- task 8 ----------***');
// ***---------- task 8 ----------***

// ==================================

// ***---------- task 9 ----------***
// Write a higher order function createMultiplier that takes a factor as an argument 
// and returns another function that multiplies a number by that factor. 
function createMultiplier(factor) {
    return function (num) {
        return num * factor;
    }   
}
var double = createMultiplier(2);
var triple = createMultiplier(3);
console.log('***---------- task 9 ----------***');
console.log('Double Expect Result: 10');
console.log('Double Actual Result: ' + double(5));
console.log('Triple Expect Result: 15');
console.log('Triple Actual Result: ' + triple(5));
console.log('***---------- task 9 ----------***');
// ***---------- task 9 ----------***

// ==================================

// ***--------- task 10 ----------***
// Write a function called "calculate" that adds two numbers and assign a property "description" 
// to it with a string describing what the function does. Then, access and log this property.
// ***--------- task 10 ----------***
function calculate(a, b) {
    return a + b;
}
calculate.description = 'This function adds two numbers.';
console.log('***--------- task 10 ----------***');
console.log('Calculate Expect Result: This function adds two numbers.');
console.log('Calculate Actual Result: ' + calculate.description);
console.log('***--------- task 10 ----------***');
// ***--------- task 10 ----------***

// ==================================

//***********************************
// ***------ END OF SOURCE -------***
//***********************************
