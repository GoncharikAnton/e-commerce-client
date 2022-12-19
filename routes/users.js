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


module.exports = router;
