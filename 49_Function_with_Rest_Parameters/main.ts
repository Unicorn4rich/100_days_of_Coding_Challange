// Q49 -Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies.
// It should log each hobby with a statement saying you enjoy that hobby.


function hobbies(...Rest_parameter: string[]){

    Rest_parameter.map((item) => console.log(`You enjoy ${item}`));
};

hobbies("Crickect", "Hockey", "Coocking", "Video games");



// Output

// You enjoy Crickect 
// You enjoy Hockey   
// You enjoy Coocking   
// You enjoy Video games