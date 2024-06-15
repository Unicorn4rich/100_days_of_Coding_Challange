// Q54 - Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section
// based on what you need at that moment, like adjusting labels based on user choices.



function Flexible(key: string, value: string){

    let Hand_Object: Record<string, string> = {};

    Hand_Object[key] = value;

    return Hand_Object;
}


let printing = Flexible("karachi", "pakistan");

console.log(printing);




// Q54 - Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section
// based on what you need at that moment, like adjusting labels based on user choices.

