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

console.log(anyVariable); // Reference Error -> Not defined

console.log(abc) // Shows error at the end

