// Loosely typed -> You can change the type of data type while reassignment
// Statically typed -> You need not define the type while declaration

// Dynamically typed -> You need to define the data type while assignment
// Strictly typed -> You cannot change the type of data type, for eg. if n is an integer 
// it cannot be reassigned as a string

// --------------------

const arr = ["This", "is", 4, 'A'];
console.log(arr);

console.log(arr.length);

// Pushing in array
arr.push(42);
console.log(arr);
console.log(arr.push(3100));

// Access index not in array
console.log(arr[30]); // undefined

// Updating value at index not in array
console.log(arr[7] = 321); // prints 321
// but adds 321 at index 7 which is an ERROR
// Hence, use push as element is added at the last index
// Otherwise the element is added at that index which is not even present in the array

// Adding an element at a greater index adds void spaces upto that index in an array -> Absurd Behaviour

// Delete element in array
arr.pop(); // Popped and printed at line 77 only 

// Splice method is helpful in 4 operations: Push, Pop, Delete, Subarray

delete arr[1]; // deletes the element and creates an empty space at that index

console.log(arr)

// Deleting elements in array: Pop, Shift, Unshift, Splice, Push

const mutableArr = [1, 2, "Java", "Swift", 31, "Golang"];

// Push in array

let newA = mutableArr.push(31);
console.log("Returns : " + newA); // returns length of array after adding
console.log(mutableArr);

let deletedElement = mutableArr.pop();
console.log("Deleted Element: " + deletedElement);
console.log(mutableArr);

let elementDeleteStart = mutableArr.shift();
console.log("Element deleted at start: " + elementDeleteStart);
console.log(mutableArr);

let elementAddedAtStart = mutableArr.unshift("Some element 1", "Some element 2");
console.log("Element added at start: " + elementAddedAtStart); // returns length of array after updation
console.log(mutableArr);

// Loops

const newArr = ["Delhi", "Jaipur", ""];
for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i]);
};

// Keys in object
// Indices in array
for (let el in newArr) {
    console.log("For in: " + el);
}

// for-of works only on iterables

// Values in object
// Elements in array
for (let el of newArr) {
    console.log("For of: " + el);
}

// Array Methods: map, filter, reduce, forEach ....
newArr.forEach(element => {
    console.log(element + " ");
});