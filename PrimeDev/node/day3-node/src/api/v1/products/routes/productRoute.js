const express = require("express");
const { getProductsController } = require("../controllers/getProductsController.js");
const { addProductsController } = require("../controllers/addProductsController.js");

const productRouter = express.Router();

productRouter.get("/", getProductsController);

productRouter.post("/", addProductsController);

module.exports = { productRouter }; // productRouter gets added in export object