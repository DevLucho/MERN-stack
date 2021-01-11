const Product = require('../models/Product')

async function addProduct(req, res) {
    try {

        const {
            name,
            size,
            unitaryPrice,
            description
        } = req.body;


        const product = Product({
            name,
            size,
            unitaryPrice,
            description
        });

        if (req.file) {
            const { filename } = req.file
            product.setImgUrl(filename)
        }

        const productStore = await product.save()

        res.status(201).send({ productStore })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

async function getProducts(req, res) {
    // find -> consulta, lean -> convierte a objetos de js, exec - > ejecuta consulta y retorna promesa
    const products = await Product.find().lean().exec()
    res.status(200).send({ products })
}

module.exports = {
    addProduct,
    getProducts
}