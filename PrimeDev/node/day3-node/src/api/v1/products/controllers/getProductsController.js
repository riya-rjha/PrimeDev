const { ProductModel } = require("../../../../models/product-schema");

const getProductsController = async (req, res) => {
    const { page = 1, limit = 6, q = "" } = req.query;

    let mongooseQuery = ProductModel.find();

    const regexMatch = new RegExp(q, "i"); // case insensitive = 'i'

    mongooseQuery = mongooseQuery.where("title").regex(regexMatch)

    const queryClone = mongooseQuery.clone();
    const totalProducts = queryClone.countDocuments();

    mongooseQuery = mongooseQuery.sort("_id");
    mongooseQuery = mongooseQuery.skip((page - 1) * limit);
    mongooseQuery = mongooseQuery.limit(limit);

    const productsList = await mongooseQuery;

    // const totalProducts = await ProductModel.countDocuments();

    res.send({
        status: "success",
        data: {
            products: productsList,
            page,
            limit,
            total: totalProducts
        },
    });
}

module.exports = {
    getProductsController
}