const express = require('express');
const { getProducts, newProduct, getSingleProducts, updateProduct, deleteProduct } = require('../controllers/productController');
const router = express.Router();

router.route('/products').get(getProducts);
router.route('/product/new').post(newProduct);
router.route('/product/:id')
                           .get(getSingleProducts)
                           .put(updateProduct)
                           .delete(deleteProduct)

// router.route('/product/:id').get(getSingleProducts);
// router.route('/product/:id').put(updateProduct);

module.exports = router