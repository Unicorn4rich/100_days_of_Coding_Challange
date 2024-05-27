// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.
// Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
// Explain & TIP: The spread operator can be used in conjunction with array methods like sort() to combine and
// manipulate arrays efficiently.
let pricesSet1 = [3000, 1800, 1000];
let pricesSet2 = [5000, 7000, 1900];
let combined_Prices = [...pricesSet1, ...pricesSet2].sort((F, S) => F - S);
console.log(combined_Prices);
export {};
// Notes
// Sabse pehle, do alag alag arrays banayein jo laptops ki keemat ko shamil karte hain:
// Ab, spread operator (...) ka istemal karke yeh dono arrays ko combine karein aur ek single array banayein:
// Phir, sort() method ka istemal karke is combined array ko tarteeb mein barhayen (ascending order mein):
// Ab, sorted array ko console par log karein:
// Is tarah se, humne spread operator ka istemal karke do alag alag arrays ko combine kiya hai aur fir unhe tarteeb 
// mein barha diya hai. Yeh ek aasan tareeka hai arrays ko manipulate karne ka aur real-world mein bhi aksar aise hi 
// data ko manipulate karne ke liye spread operator ka istemal kiya jata hai, jaise ki multiple sources se data ko ek 
//single list mein combine karna.
