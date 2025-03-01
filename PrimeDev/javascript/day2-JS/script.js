let a = "hello";
let b = "hello";
var c = NaN;
var d = NaN;

if (c == d) {
    console.log("Equal");
} else {
    console.log("No");
}

let n1 = "31";
console.log(typeof n1) // string
let n2 = "23";
console.log(typeof (n1 * n2)) // number

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality 

var anum = "10";
var bnum = 10;

if (anum == bnum) console.log("Loose equality check")
if (anum === bnum) console.log("Strict equality check")

// Let -> Block scoped     ||  Cannot be redeclared  ||   Can be reassigned
// Const -> Block scoped   ||  Cannot be redeclared  ||   Cannot be reassigned
// var -> Function scoped  ||  Can be redeclared     ||   Can be reassigned

console.log(number);
var number = "Hi";
console.log(number);
var number = "Hello";
console.log(number);

// Process:
// 1. Memory Allocation
// 2. Execution
// Undefined is a placeholder for upcoming values

// console.log(anyVariable); // Reference Error -> Not defined

// console.log(abc) // Shows error at the end

// --------------------
// Day 3: Learning JavaScript

// Function Declaration

f(31);

function f(a, b, c) {
    console.log("This is a function with values a, b, c: " + a + "," + b, ",", c);
    a = 32;
};

function f(a, b, c) {
    console.log("This is another function where value of a is: " + a);
};

f(31);
f(321);

// Steps in which JavaScript works:
// 1. Memory allocation
// 2. Execution Phase

// aFunc("R"); // Cannot use this function before intialization

// Function Assignment
// 1. We cannot use a function before declaration
// 2. We cannot create 2 functions with the same names

const aFunc = function f(a) {
    console.log("Hi ", a);
};

aFunc();

// Throws error as there are two functions with the same name
// const aFunc = function (a) {
//     console.log("Hi ", a);
// };

// print(); // A function to print the current document
// loads when the live server is enabled

// Anonymous Function Assignment - ES6 Syntax - Preferred Syntax

const anotherFunc = function () {
    console.log("This is an anonymous function");
};

// Arrow Function
const arrowFunc = (num) => {
    console.log("This is the arrow function that has the value: ", num);
}

arrowFunc(312);

// Calculate sum and returns its mod 10 value

// Type 1
function sumOfNos(a, b) {
    return (a + b) % 10;
};

// Type 2
// The name of variable is important, the function name makes no sense
const ans = function ans(a, b) {
    return (a + b) % 10;
}

// Type 3
const ansII = function (a, b) {
    return (a + b) % 10;
}

// Type 4
const newFunc = (a, b) => (a + b) % 10;

console.log(sumOfNos(31, 13));
console.log(newFunc(32, 23));

// -------------
// var, let, const

// var -> function scoped
const temp = () => {
    if (true) {
        var userName = "Tanisha";
    }
    console.log(userName);
};
temp();
// console.log(userName); // Error -> Cannot access userName outside function scope

// If var is declared in the function, it becomes function scoped
// If var is declared in a block of code, it ignores brackets and becomes "global scoped/block scoped"

{
    var newName = "Riya";
}

console.log(newName); // Global scope

const temp2 = () => {
    if (true) {
        var userName = "Tanisha";
    }
    console.log(userName);
    function anotherFunc() {
        console.log("This is nested function");
    }
    anotherFunc();
};
temp2();
anotherFunc(); // calls the global function assigned in Line 89
// anotherFunc inside the function cannot be accessed as functions declared inside a function are function scoped

// GEC - Global Execution Context

const sumMod10 = (a, b) => {
    const ans = (a + b) % 10;
    const printPretty = (text) => {
        console.log("----", text, "----");
    }
    printPretty(ans);
    console.log("Sum done");
};

sumMod10(10, 19);
console.log("END");

// Process of Exection of Functions in JavaScript:
// 1. First function added to call stack is GEC
// 2. In call stack there are 2 functions, anonymous GEC & sumMod10 which holds another anonymous function
// 3. ans value is stored in the local block
// 4. printPretty function runs and it is stored now in the call Stack
// 5. Log on the values and remove subsequently all functions from the call stack

