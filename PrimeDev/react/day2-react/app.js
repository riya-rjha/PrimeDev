import React from "react";
import ReactDOM from 'react-dom/client';
import Card from "./components/Card";
import { TITLE } from "./components/Card";
import {Button} from "./components/Button";

const domRoot = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(domRoot);

// Component and Element difference
// Pure functions

// component

const App = () => {
    return (
        <div >
            <Button color="danger">Cancel</Button>
            <Button color="cancel">Submit</Button>
            <Card username="Tanisha" />
            <Card username="Tanya" />
            <Card />
            <Card username={TITLE}/>
            {/* When no username mentioned, undefined is passed and when trying to access {username}, it shows no string*/}
            {/* But when we try to access a property of that undefined, it shows error */}
            {Card({ username: "RRJ" })} {/* Props sent as objects */}
            {/* Curly brackets are used to write any JS Expression */}
        </div>
        // React.createElement("h1", {}, "Hello World!")
    )
};

console.log("Hello Tanya");

// reactRoot.render(App());
reactRoot.render(<App />);

// Bundling in React.js & Bundler
// Parcel as a bundler

// object comes only when you call as an object

