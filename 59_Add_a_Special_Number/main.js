"use strict";
// Q59 - Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to
// any other number you give them later.
// function CustomAdders(Speacial_num: number): (Add_number: number) => number {
//   return function (Add_number: number): number {
//       return Add_number + Speacial_num;
//    }
// };
// let extract = CustomAdders(5);
// console.log(extract(10));      // Output 15
// Note
// : (Add_number: number) => number
// ye line is liye likhi gai hai ke CustomAdders() jo function return karega jo ke aik annonymous function hai 
// uski data type ye hogi....
// Higher-Order Function:
// aik higher-order function wo function hota hai jo ya to ek function ko argument ke taur pe accept karta hai ya 
// ek function ko return karta hai, ya dono karta hai. Is case mein, CustomAdders function ek function return karta hai.
// Inner Function:
// Inner function ek closure hai jo apne lexical scope se variables ko access kar sakta hai. Is example mein, 
// inner function Speacial_num variable ko access kar sakta hai jo outer function CustomAdders mein define kiya gaya hai.
function Adders(Speacial) {
    return function (number) {
        return number + Speacial;
    };
}
;
let extrat = Adders(6);
console.log(extrat(20));
console.log(extrat(-3));
