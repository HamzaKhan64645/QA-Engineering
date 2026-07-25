// ==========================================
// Day 1 Mini Project - QA Test Report
// ==========================================

// Given Variables
const testerName = "Hamza";
const testSuite = "Login Tests";
const totalTests = "25";
const passedTests = 23;

// Step 1: Convert totalTests from string to number
const totalTestsNumber = Number(totalTests);

// Step 2: Calculate failed tests and pass percentage
const failedTests = totalTestsNumber - passedTests;
const passPercentage = (passedTests / totalTestsNumber) * 100;

// Step 3: Print the report
console.log(`===== QA Test Report =====
Tester: ${testerName}
Suite: ${testSuite}
Total Tests: ${totalTestsNumber}
Passed: ${passedTests}
Failed: ${failedTests}
Pass Percentage: ${passPercentage}%
==========================`);