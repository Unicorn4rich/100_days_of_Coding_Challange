// Q54 - Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section
// based on what you need at that moment, like adjusting labels based on user choices.


function Flexible(key: string, value: string){

    let felxi_Object: Record<string, string> = {};

    felxi_Object[key] = value;

    return felxi_Object;
}

let printing = Flexible("name", "shoaib");

console.log(printing);  // Output { name: 'shoaib' }


// Notes
// Record<string, string> 
// isko utility type, kaha jata hai ye apne andar key or values dono string mein legi....

// Getting_in_Object[key] = value;
// is ko dynamic property kehty hain jo aik value ko object ke andar squire brackets mein key bnati hai or dosri
// value ko us key ki crossponding value bnati hai is tarhn ye key value pairs ban jate hain...

