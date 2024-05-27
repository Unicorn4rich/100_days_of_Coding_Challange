// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and
// a method describe() that logs a sentence about the laptop.

// Explain & TIP: Objects can also contain functions (methods) that can perform actions using the object's properties.
// This introduces method definition within objects.



// is example mein this keyword ka istemal kiyya jaa sakta hai laptop object ke name ki jagah...

let laptop = {
    make: "Dell",
    model: "Latitude E610",
    year: 2025,
    describe: function() {
        console.log(`I want this ${this.make} laptop which is ${this.model} model and manufactured in ${this.year}`);
    }
};

laptop.describe();

