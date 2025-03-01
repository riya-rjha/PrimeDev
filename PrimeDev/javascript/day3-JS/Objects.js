// When an object is logged in the browser console and if it's key values are integers
// Then the nos are sorted in ascending order
const obj = {
    "pname": "Tanisha",
    "aprofession": "Sabki chaheti",
};

console.log(obj);

console.log(obj.pname)
console.log(obj.unknown); // undefined

// How to add a key-value pair
obj.newKey = "some value";
console.log(obj);

// Accessing a value dynamically
console.log(obj["pname"]);

// Prompt
const promptUserAge = prompt("What is your name? ", "Tanisha");
obj.pname = promptUserAge;
console.log(obj);

const newObj = {
    "name": "Tanya",
    "name": "Tanisha",
    "country": "India",
};

console.log(JSON.parse(JSON.stringify(newObj)));


// {name: 'Tanisha', country: 'India'}
// country
// : 
// "Australia"
// name
// : 
// "Tanisha"

// Why when I have changed the country to Australia, it is showing at the top "India"
// but on logging, it is giving Australia in expanded version

// REASON: In JavaScript, objects are logged by reference
// When mutation takes place, the array is changed at the reference position
// And logged with updated values at the specified line

// console.log(JSON.parse(JSON.stringify(newObj))); // Logs an independent copy (snapshot) at every moment

console.log(newObj);
newObj["country"] = "Australia";
newObj.country = "Australia";

console.log(JSON.parse(JSON.stringify(newObj))); 

// Mutable & Immutable -> Objects and Arrays are mutable as it does not require any new variable formation
// It reassigns or changes the value at the same object reference

// Immutable -> Strings, Numbers using let, const are immutable
// For eg. let age = 36 points to a number in memory to 36, but when it is reassigned
// age = 24, it now points to new reference, so it is immutable
// Strings are immutable, we can change the reference of the string 
// For eg. let s = "RRJ" and s = "Tanisha", this changes the reference

delete obj.aprofession;
console.log(obj);

// deleting objects entirely is not possible
