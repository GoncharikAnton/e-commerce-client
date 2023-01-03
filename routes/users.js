const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.query.length){
    userController.getUser(req, res)
  }else{
    userController.getAllUsers(req, res);
  }
});

router.post('/login', function(req, res, next) {
  userController.postLoginUser(req, res, next);
});
router.post(`/wishlist`, function(req, res, next) {
  userController.postWishList(req, res, next);
});

router.get(`/wishlist/:id`, function(req, res, next) {
  userController.getWishList(req, res, next);
});
router.delete(`/wishlist`, function(req, res, next) {
  userController.deleteWishList(req, res, next);
});

module.exports = router;
