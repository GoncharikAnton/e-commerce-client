const express = require('express');
const router = express.Router();
const db = require('../database')
const productController = require('../controllers/productsController');
router.get('/', function (req, res, next) {
    console.log(req.query)
    if(req.query.title){
        productController.getProductByTitle(req, res);
    }else if(req.query.category) {
        if(req.query.id && req.query.category === '9'){
            productController.getConsoleProductSpecs(req,res);
        }else if(req.query.id){
            productController.getGameProductSpecs(req, res);
        }else{
            productController.getProductsByCategory(req, res);
        }

    }else if(req.query.image){
        productController.getProductImage(req, res);
    }else{
        res.cookie('session-id', {title: 'express', sessionID: req.sessionID});
        productController.getAllProducts(req, res);
    }
});

router.get('/:id', function (req, res, next) {
    productController.getProductById(req, res);
});


module.exports = router;
