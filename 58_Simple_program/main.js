"use strict";
// Q58 - Write a simple program that can take lots of scores and find their average.
function program(...scores) {
    let totale = scores.reduce((main_sum, curr_value) => main_sum + curr_value, 0);
    let average = totale / scores.length;
    return average;
}
;
let final = program(3, 45, 76, 78, 32, 89);
console.log(final);
