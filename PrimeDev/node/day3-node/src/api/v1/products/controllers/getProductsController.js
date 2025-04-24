const { ProductModel } = require("../../../../models/product-schema");

const getProductsController = async (_, res) => {
    const productsList = await ProductModel.find();
    // console.log("Products retained")
    res.send({
        status: "success",
        data: {
            products: productsList,
        },
    });
}

module.exports = {
    getProductsController
}