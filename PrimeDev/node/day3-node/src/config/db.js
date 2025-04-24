const mongoose = require("mongoose");
require("dotenv").config();

const fs = require("fs");
// const data = fs.readFileSync("../../.env") -> won't work
const data = fs.readFileSync(".env", "utf-8") // no error, works
// console.log(data) // data in binary format if not specified // prints URL in utf-8 format
// console.log(process.env) // env details

mongoose
    .connect(process.env.URL, {
        dbName: "PRIME-ABES"
    })
    .then(() => {
        console.log("Db connected");
    })
    .catch((err) => {
        console.log("Db connection error");
        console.log(err.message)
    });

// ODM - DBMS : Object Data Mapping