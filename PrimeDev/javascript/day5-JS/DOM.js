// console.dir(window); // window object represents BOM
// console.dir(document); // document object represents DOM
// // document is given by window so window.document -> document

// console.dir -> displays a list of properties of the specified object -> displays all attributes and properties

// console.log(window.document)

// Finding the element
// 1. document.getElementById() -> null / element
// 2. document.getElementByClassName() -> iterable[] OR HTML Collection / empty iterable
// 3. document.getElementByTagName -> iterable[] OR HTML Collection / empty iterable
// 4. document.querySelector() -> First element that matches the query
// 5. document.querySelectorAll() -> NodeList of all elements matching the query

// Difference between Node & element
// Node and NodeList
// HTML Collection

const elem1 = document.getElementById("text-1");
console.log(elem1);
console.log(elem1.style.color = "red");

const elem2 = document.getElementById("text");
console.log(elem2); // null as element is not present
// there is surety that the element does not exist 
// when there is no surety that the element will exist or not, it gives undefined

// returns empty HTML Collection if no such className exists
// or returns an iterable of all elements with same className 
// can be accessed using array's indices

const elem3 = document.getElementsByClassName("division");
console.log(elem3[0]);
elem3[0].style.color = "green";

const elem4 = document.getElementsByClassName("div-tag");
console.log(elem4); // empty HTML Collection

const elem5 = document.getElementsByTagName("h3");
console.log(elem5); // HTML Collection

const elem6 = document.getElementsByTagName("j");
console.log(elem6); // Empty HTML Collection 

// Query Selector selects first matching element and querySelectorAll returns all
// Log an element and check it's Prototypes and see which elements work for this

const elem8 = document.querySelectorAll("p.text-lorem");
elem8.forEach((el) => {
    el.style.backgroundColor = "pink";
});
console.log(elem8);

// Compounding
// When more than one elements, such as p and h1 have same class names
// then we specify through compounding -> p.text

const elem7 = document.querySelector("p.text-lorem");
elem7.style.backgroundColor = "yellow";