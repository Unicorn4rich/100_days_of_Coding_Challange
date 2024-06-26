"use strict";
// Q57 - Find the Average Grade: Given a list of grades, calculate the average grade.
// let Grades: number[] = [23, 18, 20, 26, 19, 17, 58, 92];
// let total = Grades.reduce((accumulator, currentGrade) => accumulator + currentGrade, 0);
// let average = total / Grades.length;
// console.log(average);
// Notes 
// accumulator ki initial value 0 hai.
// currentGrade array ka pehla element hai.
// Iteration 1:
// currentGrade = 23 (array ka pehla element)
// accumulator = 0 + 23 = 23
// Ab accumulator ki value 23 ho gayi hai.
// Iteration 2:
// currentGrade = 18 (array ka dusra element)
// accumulator = 23 + 18 = 41
// Ab accumulator ki value 41 ho gayi hai.
// Iteration 3:
// currentGrade = 20 (array ka teesra element)
// accumulator = 41 + 20 = 61
// Ab accumulator ki value 61 ho gayi hai.
let get = [32, 45, 76, 9, 32, 12, 45, 56,];
let total = get.reduce((acc, curr) => acc + curr, 0);
let average = total / get.length;
console.log(average);
