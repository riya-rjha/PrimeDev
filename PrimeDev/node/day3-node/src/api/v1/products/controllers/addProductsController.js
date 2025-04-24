const { ProductModel } = require("../../../../models/product-schema.js")

const addProductsController = async (req, res) => {
    const obj = req.body;
    // console.log(obj)
    const newProduct = await ProductModel.create(obj);

    res.json({
        status: "success",
        message: "Products added successfully",
        data: {
            product: newProduct,
        }
    });
}

module.exports = {
    addProductsController
}