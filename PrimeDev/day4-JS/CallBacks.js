// Connected to Objects.html of day4-JS

// break and continue cannot be used in forEach

const getGrades = (percentage) => {
    const grades = [
        [90, 'A+'],
        [80, 'A'],
        [70, 'B+'],
        [60, 'B'],
        [50, 'C'],
        [40, 'D'],
        [30, 'F'],
    ];

    let grade = "";
    grades.forEach((e) => {
        if (e[0] <= percentage) {
            grade = e[1];
        }
    });

    return grade;
};

console.log("Grade alloted for percentage: ");
// let per = prompt("Enter percentage: ");
// console.log(getGrades(per));

const totalMarks1 = (a, b) => {
    const ans = a + b;
    return ans;
};

const printPretty = (txt) => {
    console.log("-------");
    console.log(txt);
    console.log("-------");
};

const res = totalMarks1(10, 20);
console.log(res);
printPretty("Hello");

// Not a callback ->
printPretty(totalMarks1(10, 20));

// Flow of Execution: Max height of call stack is 3
// 1. GEC
// 2. totalMarks(10, 20) called first as this is also a form of argument only
// 3. printPretty

// Callback: A function that is passed to another function as an argument.
// Higher Order Functions: A function that accepts another function as a parameter or returns a function.


// Function parameters can be anything, variables and functions
const totalMarks2 = (a, b, c) => {
    const ans = (a + b);
    return c(ans);
};

totalMarks2(1, 3, printPretty) // printPretty = callback fn
// totalMarks = higher order fn

// SOC - Separation of Concern -> Separating code to enhance readability
// IOC - Inversion of Control -> When one call depends on another callback

// De-coupled Code: Eg. Boggies of Train: Changing position of Sleeper & AC Train boggies easy.
// De-coupling helps in separation and seggregation of code

// Iterable methods like forEach use callbacks

/*
const getMetaData = () => {
    const name = prompt("Enter name: ");
    console.log("Hello " + name);
    // parseInt, parseFloat, Number
    const subNos = parseInt(prompt("Enter number of subjects: "));
    return subNos;
}
    */

/*
const getSubjects = (subNos) => {
    const record = {}; // Mutability
    for (let i = 0; i < subNos; i++) {
        const subName = prompt(`Enter name of subject ${i + 1}: `);
        const marks = prompt(`Enter marks of ${subName}: `);
        record[subName] = +marks;
    };
    console.log(record);
    return record;
};
*/

// Imp Object Methods: Object.values, Object.keys and Object.entries

let object = {
    maths: 100,
    english: 30,
    hindi: 31
};

const marks = Object.values(object);
const subjects = Object.keys(object);
const entries = Object.entries(object);

console.log("Marks obtained: " + marks);
console.log("Subject: " + subjects);
console.log("Marks scored: " + marks);

// Using forEach & Callback mechanism - Most used in JavaScript

let totalMarks = 0;
let totalSubjects = 0;

const temp = (a) => {
    totalMarks += a;
    totalSubjects++;
};

marks.forEach(temp); // Method 1

// Method 2
marks.forEach((a) => {
    totalMarks += a;
    totalSubjects++;
});

const result = totalMarks / totalSubjects;
console.log(result);

console.log("Total marks: " + totalMarks);
console.log("Total Subjects: " + totalSubjects);

const getPercentage = (record, numberOfSubjects) => {
    let totalMarks = 0;
    Object.values(record).forEach(el => {
        totalMarks += el;
    });
    console.log(totalMarks / numberOfSubjects);
}

// Subject with maximum marks

object = {
    maths: 100,
    english: 800,
    hindi: 32,
    sst: 90
};

let maxNumber = 0;
let maxSubject = "";

const getMaxMarksSubject = () => {
    const entries = Object.entries(object);
    // let key = entries[0][0];
    // let value = entries[0][1];
    entries.forEach((el) => {
        if (maxNumber < el[1]) {
            maxNumber = el[1];
            maxSubject = el[0];
        }
        // key = el[0];
        // value = el[1];
    });
    console.log("Entries array: " + entries);
    console.log("Max Marks: " + maxNumber + " in Subject: " + maxSubject);
}

getMaxMarksSubject();


// record cannot be assigned to new object as then reference will be changed

// const num = getMetaData();
// const record = getSubjects(num);
// getPercentage(record, num);

// Higher Order Functions + Callbacks
// forEach - calls a callback function once for each array element

let arr = [10, 30, 50];

const printPrettyFunc = (el, idx, c) => {
    console.log("*", el, idx, c);
}
arr.forEach(printPretty); // Here, arr -> Higher Order Function
// printPretty - callback fn

// Array method: map
arr.map((el, idx) => {
    console.log(el + " " + idx);
});

console.log(arr);

// https://www.w3schools.com/js/js_array_methods.asp

// Find & Find Index

let per = 62;

const getIndexOfGrades = (per) => {
    const grades = [
        [90, 'A+'],
        [80, 'A'],
        [70, 'B+'],
        [60, 'B'],
        [50, 'C'],
        [40, 'D'],
        [30, 'F'],
    ];

    const idxI = grades.findIndex((e) => { // returns index of array
        if (e[0] <= per) {
            return true;
        }
        return false;
    });

    const idxII = grades.find((e) => { // returns element of that array
        if (e[0] <= per) {
            return true;
        }
        return false;
    });
    console.log(idxI);
    console.log(idxII);
};

getIndexOfGrades(per);

// -----------------------------------------------

// Higher Order Functions to be applied on Map
// params: accumulator, element, indices, array, default val

const anArr = [10, 20, 30];

// Default value provided

anArr.reduce((acc, element, idx, c) => {
    console.log(acc, element, idx, c); // first accumulator has 0
    // second accumulator has undefined
    // third accumulator has undefined
}, 0);

// value of accumulator is used at every subsequent iteration

// No default value provided 
// And no accumulator returned, then iteration starts by taking accumulator initially as first element of arr
// rest accumulator values are undefined

anArr.reduce((acc, element, idx, c) => {
    console.log(acc, element, idx, c);
},);

// If accumulator is returned, every subsequent iteration uses the accumulator
// and does not return undefined

anArr.reduce((acc, element, idx, c) => {
    console.log(acc, element, idx, c);
    return acc; // same accumulator is returned and no undefined value
});

// arr and default values
// each default value is based on the previous indices and hence subsequent indices

// callback functions donot return anything, unless and until specified after every call

// default value is like when a group of children have to pass the amounts to subsequent children
// then the first student must be provided some money to go further, this means starting value or default

// Calculating sum through reduce function

const finalSum = anArr.reduce((acc, element) => {
    return acc + element;
});

console.log(finalSum);

// Calculating product through reduce function

const finalProd = anArr.reduce((acc, element) => {
    return acc * element;
});

console.log(finalProd);

// Giving default values

const finalProdDef = anArr.reduce((acc, element) => {
    return acc * element;
}, 1); // using 1 -> 6000
// using 0 -> 0 (where default is 0)

console.log(finalProdDef);

const newArray = anArr.reduce((acc, elem) => {
    acc.push(elem * 2);
    return acc;
}, []);

console.log(newArray);

// indexOf -> returns index at which element is present
// returns -1 when a new object is created, such as a 1D array

const anotherArray = [1, 3, 4];
console.log(anotherArray.indexOf(3));

const twoDArr = [1, [3, 1]];
console.log(anotherArray.indexOf([3, 1])); // -1 as reference is another

// optional params: starting Index

console.log(window);
console.log(document);
console.dir(document);