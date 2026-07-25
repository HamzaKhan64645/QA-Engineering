// ==========================================================
// Day 1 Practice
// JavaScript Fundamentals for QA Automation
// ==========================================================


// ==========================================================
// Exercise 1 - Template Literals
// ==========================================================

const firstName = "Hamza";
const lastName = "Khan";
const age = 24;
const isStudent = false;

console.log(`Name: ${firstName} ${lastName}
Age: ${age}
Student: ${isStudent}`);


// ==========================================================
// Exercise 2 - Arithmetic Operations
// ==========================================================

const price = 100;
const quantity = 3;

console.log(`Price: ${price}
Quantity: ${quantity}
Total: ${price * quantity}`);


// ==========================================================
// Exercise 3 - Type Conversion
// ==========================================================

const marks = "85";

const finalMarks = Number(marks) + 5;

console.log(`Final Marks: ${finalMarks}`);


// ==========================================================
// Exercise 4 - Boolean Logic
// ==========================================================

console.log(true && false);   // false


// ==========================================================
// Exercise 5 - Comparison Operators
// ==========================================================

console.log(10 == "10");      // true
console.log(10 === "10");     // false
console.log(20 > 15);         // true
console.log(Boolean("false")); // true
console.log(Boolean(""));      // false


// ==========================================================
// Exercise 6 - Bug Hunt (Corrected Version)
// ==========================================================

const userName = "Hamza";
const userAge = 24;

const message = `User: ${userName}, Age: ${userAge + 1}`;

console.log(message);


// ==========================================================
// Exercise 7 - QA Automation Log
// ==========================================================

const browser = "Chrome";
const username = "admin";
const executionTime = 3.25;

console.log(`Running login test on ${browser} using user ${username}.
Execution completed in ${executionTime} seconds.`);


// ==========================================================
// Bonus Challenge
// ==========================================================

const a = "10";
const b = 5;

console.log(`${Number(a) + b}`);   // 15


// ==========================================================
// End of Day 1 Practice
// ==========================================================