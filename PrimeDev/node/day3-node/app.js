const express = require('express');
var morgan = require('morgan')
require("./src/config/db.js")
const PORT = 2200;
const { productRouter } = require("./src/api/v1/products/routes/productRoute.js")

const app = express();

app.use(express.json());

// App level middleware
// app.use((req, res) => {
//     console.log("Hello Tannii");
// });

app.use(morgan("dev"));

app.use("/api/v1/products", productRouter);

app.listen(PORT, () => {
    console.log(`App is listening to PORT ${PORT}`);
});