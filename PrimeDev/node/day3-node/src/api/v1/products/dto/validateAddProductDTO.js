const validateAddProductDTO = (req, res, next) => {
    try {
        console.log("Validating Product DTO : ")
        const { title, price, stock } = req.body;
        if (title === undefined || title === null || typeof title !== "string" || title.length < 2) {
            res.status(400);
            return res.json({
                status: "fail",
                message: "Invalid title",
            });
        }

        if (!price || typeof price != "number" || price < 0) {
            res.status(400);
            return res.json({
                status: "fail",
                message: "Invalid price amount"
            });
        }

        if (!stock || typeof stock != "number" || stock < 0) {
            res.status(400);
            return res.json({
                status: "fail",
                message: "Invalid stock amount"
            });
        }

        next(); // Proceed to the next middleware if validation passes
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "An unexpected error occurred",
        });
    }
};

module.exports = {
    validateAddProductDTO
}