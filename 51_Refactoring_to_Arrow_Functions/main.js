"use strict";
// Q51 - Refactoring to Arrow Functions: Take a simple function that calculates the area 
// of a rectangle and refactor it into an arrow function.
function rectangle(width, length) {
    let wapas = width * length;
    return wapas;
}
let AreaCalculate = (width, length) => width * length;
let final = AreaCalculate(9, 6);
console.log(final); // 
// // Original function for calculating the area of a rectangle
// function calculateArea(width: number, height: number): number {
//     return width * height;
//   }
//   // Refactored into an arrow function
//   let calculateAreaArrow = (width: number, height: number): number =>
//     width * height;
//   // Example usage of the arrow function
//   console.log(calculateAreaArrow(5, 7)); // Logs the area of the rectangle
