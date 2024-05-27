// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, 
// each with properties make, model, and year, use array destructuring to assign the first and second laptops to
// variables. Then, log these variables.
// Explain & TIP: Destructuring can also be used to quickly extract elements from arrays of objects, 
// simplifying access to complex data structures.
let laptops = [
    { make: "Dell", model: "Latitude E610", year: 2018 },
    { make: "HP", model: "Pavilion", year: 2024 },
    { make: "Apple", model: "Mac-book Gen", year: 2024 }
];
// Array destructuring ka istemal karke pehle aur doosre laptops ko variables mein assign kar rhy hain..
let [first_Laptop, second_Laptop] = laptops;
console.log(first_Laptop);
console.log(second_Laptop);
export {};
// <---------------------------------------------------END------------------------------------------------------->
// Notes
// Array destructuring aik JavaScript feature hai jo arrays se elements ko extract karke unhe variables mein assign
// karta hai. Isse hum array ki har aik element ko individually access kar sakte hain aur unhe alag-alag variables mein
// store kar sakte hain.
// Ek real-world example ke through array destructuring samajhate hain: Maan lety hain hmary pas aik shopping website hai
// jisme products ka array hai jisme har aik product ka object shamil hai jisme name, price, aur category properties hain.
// Ab hamen sab se sasta or sabse mehenga product display karna hai. Is ke liye ham array destructuring ka
// istemal kar sakte hain.
