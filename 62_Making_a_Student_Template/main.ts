// Q62 - Making a Student Template: Create a blueprint for student information, including their name, age, and
// the classes they're taking, and then fill in this blueprint with an example student.


type blueprint = {
    name: string,
    age: number,
    classes: string[]
};

let student: blueprint = {
    name: "shoaib",
    age: 23,
    classes: ["HTML", "CSS", "Java script", "Typescipt"]
};

console.log(student);         
                                      

// Output:

//   {
//     name: 'shoaib',
//     age: 23,
//     classes: [ 'HTML', 'CSS', 'Java script', 'Typescipt' ]
//   }