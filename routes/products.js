const express = require('express');
const router = express.Router();
const db = require('../database')
const productController = require('../controllers/productsController');
router.get('/', function (req, res, next) {
    if(req.query.title){
        productController.getProductByTitle(req, res);
    }else if(req.query.category){
        productController.getProductsByCategory(req, res);
    }else{
        productController.getAllProducts(req, res);
    }
});

router.get('/:id', function (req, res, next) {
    productController.getProductById(req, res);
});


module.exports = router;
