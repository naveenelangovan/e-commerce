const Product = require('../models/productModel')
const APIFeatures = require('../utils/apiFeatures')


//Get Product - {{base_url}}/api/v1/products
exports.getProducts = async (req,res,next) => {
    const products = await Product.find();
    res.status(200).json ( {
        success: true,
        count: products.length,
        products
    })
}

//Create Product - {{base_url}}/api/v1/product/new
exports.newProduct = async (req,res,next) => {
    const product = await Product.create(req.body);
    res.status(200).json({
        success : true,
        product
    })
}

//Get Single Products 
exports.getSingleProducts = async (req,res, next) => {
    const product = await Product.findById(req.params.id);
     
    if(!product) {
        return res.status(404).json ( {
            success: false,
            message: "product no match"
        });
    }

    res.status (201).json ( {
        success: true,
        product
    })
}

//Update Product
exports.updateProduct = async (req,res, next) => {

    let product = await Product.findById(req.params.id)

    if(!product) {
        return res.status(404).json ( {
            success: false,
            message: "product no match"
        });
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new : true,
        runValidators: true
    })

    res.status (200).json ( {
        success: true,
        product
    })
}


//Delete Product
exports.deleteProduct = async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if(!product) {
        return res.status(404).json ( {
            success: false,
            message: "product no match"
        });
    }
    await product.deleteOne();

    res.status(200).json ( {
        success: true,
        message: "Product Deleted"
    })
}