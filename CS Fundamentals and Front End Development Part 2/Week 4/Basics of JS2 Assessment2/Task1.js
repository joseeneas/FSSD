// By : Jose Eneas da Silva Maria
// Created at March 17 2024
// ***---------- task 1 ----------***
// Define and invoke an anonymous function square() which takes a number and returns its square.
// If input is 2, output should be 4.
// ***---------- task 1 ----------***
var square = function (num) {
    return num * num;
}
console.log('***---------- task 1 ----------***');
console.log('Anonymous Square Function Expect Result: 4');
console.log('Anonymous Square Function Actual Result: '+ square(2));
console.log('***---------- task 1 ----------***');
// ***---------- task 1 ----------***


// ==================================


// ***---------- task 2 ----------***
// Define an IIFE function which takes a personName as input and displays a greeting 
// message containing the personName.
// If input is "Harry", output should be "Hello Harry, Welcome to Great Learning!"
(function (personName) {
    console.log('***---------- task 2 ----------***');
    console.log('IIFE Function Expect Result: Hello Harry, Welcome to Great Learning!')
    console.log('IIFE Function Expect Actual: ' + 'Hello ' + personName + ', Welcome to Great Learning!');
    console.log('***---------- task 2 ----------***');
})('Harry');
// ***---------- task 2 ----------***


// ==================================


// ***---------- task 3 ----------***
// Define a global array variable containing 3 numbers. 
// Define a function which increments the value of each of the elements of this array by 2. 
// Display the array after you have invoked this function.
// ***---------- task 3 ----------***
var globalArray = [1, 2, 3];
function incrementArrayBy2(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] += 2;
    }
    return arr;
}
console.log('***---------- task 3 ----------***');
console.log('Increment Array By 2 Expect Result: 3,4,5');
console.log('Increment Array By 2 Actual Result: ' + incrementArrayBy2(globalArray));
console.log('***---------- task 3 ----------***');
// ***---------- task 3 ----------***


// ==================================


// ***---------- task 4 ----------***
// Create a "course" object having following information - 
// courseName as "Computer Science", durationInMonths as 24, level as "Beginner". 
// Display object information.
// Change the value of level as "Intermediate". 
// Display object information again.
// ***---------- task 4 ----------***
var course = {
    courseName: "Computer Science",
    durationInMonths: 24,
    level: "Beginner"
};
console.log('***---------- task 4 ----------***');
console.log('Course Object Expect Result: {"courseName":"Computer Science","durationInMonths":24,"level":"Beginner"}');
console.log('Course Object Actual Result: ' + JSON.stringify(course));
course.level = "Intermediate";
console.log('Course Object Expect Result: {"courseName":"Computer Science","durationInMonths":24,"level":"Intermediate"}');
console.log('Course Object Actual Result: ' + JSON.stringify(course));
console.log('***---------- task 4 ----------***');
// ***---------- task 4 ----------***


// ==================================


// ***---------- task 5 ----------***
// Given an array "students" which is a collection of javascript objects where each object consists of information 
// regarding one student. Write a code to iterate through each of these objects and extract first name and last name of each student.
// ***---------- task 5 ----------*
var students = [
    { firstName: "Harry", lastName: "Potter", house: "Slytherin" },
    { firstName: "Ron", lastName: "Weasley", house: "Gryffindor" },
    { firstName: "Hermione", lastName: "Granger", house: "Gryffindor" }
];

console.log('***---------- task 5 ----------***');
console.log('Students Array Expect Result: \nHarry Potter\nRon Weasley\nHermione Granger');
console.log('Students Array Actual Result: ');
students.forEach(function (student) {
    console.log(student.firstName + ' ' + student.lastName);
});
console.log('***---------- task 5 ----------***');
// ***---------- task 5 ----------***


// ==================================


// ***---------- task 6 ----------***
// Given a function doubleNumber which takes a number as an argument and returns its double value.
// Write a function which takes 2 arguments- 1st an array of numbers and 2nd the doubleNumber function as a callback function
// This function should iterate through each of the array number and use the doubleNumber function to double it.
// In the end it should display the updated array.
// We are not supposed to create a new array. We just need to update the existing array.
// ***---------- task 6 ----------***
function doubleNumber(num) {
    return num * 2;
}
function doubleArray(arr, doubleNumber) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = doubleNumber(arr[i]);
    }
    return arr;
}
var numbers = [1, 2, 3];
console.log('***---------- task 6 ----------***');
console.log('Double Array Expect Result: 2,4,6');
console.log('Double Array Actual Result: ' + doubleArray(numbers, doubleNumber));
console.log('***---------- task 6 ----------***');
// ***---------- task 6 ----------***

// ==================================

// ***---------- task 7 ----------***
// 7. Implement a function called `multiplyBy` that multiplies a number by a specific factor using an IIFE (Immediately Invoked Function Expression).
// Hence, the IIFE function should return a function which should do the multiplication operation.
// The returned function should take a number as an argument and return the product of the number and the factor.
// ***---------- task 7 ----------***
function multiplyBy(num,factor) {
    return (function (num,factor) {
        return factor * num;
    })(num,factor)
}
console.log('***---------- task 7 ----------***');
console.log('Multiply By Expect Result: 10');
console.log('Multiply By Actual Result: ' + multiplyBy(5,2));
console.log('***---------- task 7 ----------***');
// ***---------- task 7 ----------***

// ==================================

// ***---------- task 8 ----------***
//8. Using the `apply` method, write a function that finds the maximum number in an array. You can use Math class's built-in max() method for this task.
// ***---------- task 8 ----------***

function findMax(arr) {
    return Math.max.apply(null, arr);
}
console.log('***---------- task 8 ----------***');
console.log('Find Max Expect Result: 5');
console.log('Find Max Actual Result: ' + findMax([1, 2, 3, 4, 5]));
console.log('***---------- task 8 ----------***');

// ***---------- task 8 ----------***

// ==================================

// ***---------- task 9 ----------***
// Declare an object named "car" with an empty object as its initial value. 
// Add the properties "make" and "model" with values "Toyota" and "Camry" respectively.
// ***---------- task 9 ----------***
var car = {};
car.make = "Toyota";
car.model = "Camry";
console.log('***---------- task 9 ----------***');
console.log('Car Object Expect Result: {"make":"Toyota","model":"Camry"}');
console.log('Car Object Actual Result: ' + JSON.stringify(car));
console.log('***---------- task 9 ----------***');
// ***---------- task 9 ----------***

// ==================================

// ***--------- task 10 ----------***
//10. Given an array "students" which is a collection of JavaScript objects where each object consists of information regarding one student.  
// Define a function displayByKey() which takes this array of objects and a keyName(as string) as arguments and displays the value of the key for each of the JavaScript objects.
// ***--------- task 10 ----------***
var students = [
    { firstName: "Harry", lastName: "Potter", house: "Slytherin" },
    { firstName: "Ron", lastName: "Weasley", house: "Gryffindor" },
    { firstName: "Hermione", lastName: "Granger", house: "Gryffindor" }
];
function displayByKey(arr, keyName) {
    arr.forEach(function (student) {
        console.log(student[keyName]);
    });
}
console.log('***--------- task 10 ----------***');
console.log('Display By Key Expect Result: \nHarry\nRon\nHermione');
console.log('Display By Key Actual Result: ');
displayByKey(students, "firstName");
console.log('***--------- task 10 ----------***');
// ***--------- task 10 ----------***

// ==================================

//***********************************
// ***------ END OF SOURCE -------***
//***********************************