
/*
----------------------------- Task 1 -----------------------------
Create a variable `isHappy` and assign it a boolean value 
based on the value of the given String variable `action`, 
whether it is `Smile` or not.
------------------------------------------------------------------
*/
console.log('Task 1');
var action = "Smile"
var isHappy
action == 'Smile' ? isHappy = true : isHappy = false;
console.log('Action is: ' + action + ' and isHappy is: ' + isHappy);

var action = "Cry"

action == 'Smile' ? isHappy = true : isHappy = false;
console.log('Action is: ' + action + ' and isHappy is: ' + isHappy);

/*
----------------------------- Task 2 -----------------------------
Create a variable `favoriteSubjects` and assign it an array of 
strings representing your favorite subjects.
------------------------------------------------------------------
*/
console.log('Task 2');
var favoriteSubjects = ['Math', 
                        'Science', 
                        'English', 
                        'History', 
                        'Art',
                        'Music',
                        'Photography'];
console.log(favoriteSubjects);

/*
----------------------------- Task 3 -----------------------------
Write a program to compare two numbers, `num1` and `num2`, and 
check if `num1` is greater than or equal to `num2`.
------------------------------------------------------------------
*/
console.log('Task 3');
var num1 = 10;
var num2 = 5;
//COMPLETE THE CODE HERE
if (num1 > num2) {
    console.log('num1 is greater than num2');
} else {
    if (num1 < num2) {
        console.log('num1 is less than num2');
    } else {
        if (num1 == num2) {
            console.log('num1 is equal to num2');
        }
    }
console.log('num1 is '+  num1 + 'and num2 is ' + num2);
}

/*
----------------------------- Task 4 -----------------------------
Write a program to calculate the square of a given number, `num`.
------------------------------------------------------------------
*/
console.log('Task 4');
var num = 4;
console.log('The square of ' + num + ' is ' + num * num);

/*
----------------------------- Task 5 -----------------------------
Write a program to check if a given number, `num`, is even or odd.
------------------------------------------------------------------
*/
console.log('Task 5');
var num = 7;
(num % 2 == 0) ? console.log(num + ' is even') : console.log(num + ' is odd');
var num = 8;
(num % 2 == 0) ? console.log(num + ' is even') : console.log(num + ' is odd');

/*
----------------------------- Task 6 -----------------------------
 Write a program to check if a given year, `year`, is a leap year 
 and divisible by 400 or divisible by 4 but not divisible by 100.
------------------------------------------------------------------
*/
console.log('Task 6');
var year = 2024;
(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) ? console.log(year + ' is a leap year') : 
                                                          console.log(year + ' is not a leap year');
var year = 2025;
(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) ? console.log(year + ' is a leap year') : 
                                                          console.log(year + ' is not a leap year');


/* 
----------------------------- Task 7 -----------------------------
Write a program that checks if a given character, `char`, 
is a vowel or a consonant.
------------------------------------------------------------------
*/
console.log('Task 7');
var char = "a";
if (char == 'a' || char == 'e' || char == 'i' || char== 'o' || char == 'u') {
    console.log(char + ' is a vowel');
} else {
    console.log(char + ' is a consonant');
}
var char = "k";
if (char == 'a' || char == 'e' || char == 'i' || char== 'o' || char == 'u') {
    console.log(char + ' is a vowel');
} else {
    console.log(char + ' is a consonant');
}

/* 
----------------------------- Task 8 -----------------------------
Write a program that determines the largest among three numbers, 
`num1`, `num2`, and `num3`.
------------------------------------------------------------------
*/
console.log('Task 8');
var num1 = 10;
var num2 = 5;
var num3 = 8;
var largest;
if (num1 > num2 && num1 > num3) {
    console.log(num1 + ' is the largest number')
} else {
    if (num2 > num1 && num2 > num3) {
        console.log(num2 + ' is the largest number')
    } else {
        if (num3 > num1 && num3 > num2) {
            console.log(num3 + ' is the largest number')
        }
    }
} 

/*
----------------------------- Task 9 -----------------------------
Write a program that determines the sign of a given number, `num` 
(positive, negative, or zero), using the ternary operator.
------------------------------------------------------------------
*/
console.log('Task 9');
var num = -5;
if (num > 0) {
    console.log(num + ' is positive');
}   else if (num < 0) {
    console.log(num + ' is negative');
} else {
    console.log(num + ' is zero');
}

/*
----------------------------- Task 10 -----------------------------
Write a program that determines the grade based on a given percentage, 
`percentage`. Use the following grading scale: 
A (90-100), 
B  (80-89), 
C  (70-79), 
D  (60-69),
F   (0-59).
------------------------------------------------------------------
*/
console.log('Task 10');
var percentage = 85;

if (percentage >= 90) {
    console.log('A');
} else {
    if (percentage >= 80) {
        console.log('B');
    } else {
        if (percentage >= 70) {
            console.log('C');
        } else {
            if (percentage >= 60) {
                console.log('D');
            } else {
                console.log('F');
            }
        }
    }
}   