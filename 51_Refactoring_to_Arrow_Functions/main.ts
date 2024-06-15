// Q51 - Refactoring to Arrow Functions: Take a simple function that calculates the area 
// of a rectangle and refactor it into an arrow function.


function rectangle(width: number, length: number): number{

   let wapas = width * length;
   return wapas;
}



let AreaCalculate = (width: number, length: number): number => width * length; 

let final = AreaCalculate(9, 6);
console.log(final)               // Output 54


// Note
// Rectangle ka area calculate karne ke liye width or hieght ke parameter ko multiply karty hain...




