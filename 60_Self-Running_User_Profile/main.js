"use strict";
// Q60 - Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the 
// user's name and age.
// let UserProfile = (function () {
//     let name: string = "shoaib";
//     let age: number = 23;
//     return {
//         Display_info: function (){
//             console.log(`Name: ${name}, Age: ${age}`);
//         }
//     }
// })();
// UserProfile.Display_info();  // Output:  Name: shoaib, Age: 23
// Notes 
// is function ka naam Immediately Invoked Function Expression hai (IIFE) jab bhi ham isko define karte hain 
// ye function foran exicute hota hai jab bhi ham isko define...
// IIFE (Immediately Invoked Function Expression) foran execute hota hai or iski return value UserProfile 
// variable mein save hoti hai. UserProfile variable ke andar IIFE khud nahi store hota, balke IIFE ka 
// return value (ek object) store hota hai.
let userProfile = (function () {
    let name = "shoaib";
    let age = 23;
    let obiwaan = {
        showing: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
    return obiwaan;
})();
console.log(userProfile.showing());
