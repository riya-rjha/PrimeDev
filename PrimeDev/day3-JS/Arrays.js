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

// Deleting element in array: Pop, Shift, Unshift, Splice




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

// for-of works only on iterabes

// Values in object
// Elements in array
for (let el of newArr) {
    console.log("For of: " + el);
}

// Array Methods: map, filter, reduce, forEach ....
newArr.forEach(element => {
    console.log(element + " ");
});