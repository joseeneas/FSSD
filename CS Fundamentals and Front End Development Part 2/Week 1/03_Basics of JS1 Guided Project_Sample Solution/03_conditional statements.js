// 1. Write a program that checks if a given number, `num`, is positive, negative, or zero.

var num = 5;

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// 2. Write a program that checks if a given number, `num`, is even or odd.

var num = 7;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 3. Write a program that determines if a given year, `year`, is a leap year and
// has 366 days, or a common year and has 365 days.
/*
We use an if statement to check if the year is a leap year based on the following conditions:
  - If the year is divisible by 4 (year % 4 === 0).
  - But not divisible by 100 (year % 100 !== 0).
  - Or it is divisible by 400 (year % 400 === 0).
If any of these conditions are true, the year is considered a leap year and has 366 days. Otherwise, it is a common year and has 365 days.
*/
var year = 2022;
var days;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  days = 366;
} else {
  days = 365;
}

console.log("Number of days in the year: " + days);

// 4. Develop a program that determines the price of a movie ticket based on a person's age. If the person is under 12 or over 65, the ticket price is $7; otherwise, it's $12.

var age = 55;
var ticketPrice;

if (age < 12 || age > 65) {
  ticketPrice = 7;
} else {
  ticketPrice = 12;
}
console.log("Ticket Price: $" + ticketPrice);

// 5. Write a program that categorizes a person's age into different groups: child (0-12 years), teenager (13-19 years), adult (20-64 years), and senior (65+ years).

var age = 25;
var ageGroup;

if (age >= 0 && age <= 12) {
  ageGroup = "Child";
} else if (age >= 13 && age <= 19) {
  ageGroup = "Teenager";
} else if (age >= 20 && age <= 64) {
  ageGroup = "Adult";
} else {
  ageGroup = "Senior";
}

console.log("Age Group: " + ageGroup);