"use strict";
// Q63 - Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias,
// including properties unique to each shape.
let circle = {
    kind: "Circle",
    radius: 5,
};
let Rectangle = {
    kind: "Rectangle",
    width: 10,
    height: 20
};
console.log(circle);
console.log(Rectangle);
