const root = document.querySelector(".container");

// let ul = document.createElement("ul");
// let li1 = document.createElement("li");
// li1.innerText = "Item 1";
// let li2 = document.createElement("li");
// li2.innerText = "Item 2";
// let li3 = document.createElement("li");
// li3.innerText = "Item 3";

// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);

// root.appendChild(ul)

// const reactRoot = ReactDOM.createRoot(root);
// const li1 = React.createElement("li", {}, "item 1"); // type, options, children
// const li2 = React.createElement("li", {}, "item 2");
// const li3 = React.createElement("li", {}, "item 3");

// const ul = React.createElement("ul", {}, [li1, li2, li3]);

// reactRoot.render(ul)


// const domRoot = document.getElementById("parent");

// const li = React.createElement(
//     "li", {
//     style: {
//         color: "blue"
//     },
//     className: "text-big"
// }, "Item 1");


// --------------------------------------------

const domRoot = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(domRoot);

// const title = React.createElement("h1", {}, "Hello from ReactDOM"); // React -> object & createElement -> function

// const title2 = <h2>Hello from JS</h2>

// console.log(typeof title); // Object
// console.log("title: ", title)

// const title2 = {
//     $$typeof: Symbol.for("react.element"),
//     "type": "p",
//     "key": null,
//     "ref": null,
//     "props": {
//         "children": "Hello from ReactDOM"
//     },
//     "_owner": null,
//     "_store": {}
// };

const Title3 = () => {
    return <h1>Hello from JSX Element Again!</h1>
}

console.log(Title3())

// reactRoot.render(title2);
// console.log(reactRoot.render(Title3()))
reactRoot.render(Title3())

// Components - a sort of function, help you in writing logic inside
// reusable

//  HTML Document -> DOM API -> React Brain -> Object -> React.createElement() <--> Babel -> JSX

reactRoot.render(<Title3 />)