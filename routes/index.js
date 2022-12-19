const express = require('express');
const router = express.Router();
const db = require('../database')
/* GET home page. */
router.get('/', function(req, res, next) {
  // if(req.query.key === 'sldjf2lkncq24fc224c53'){ // for future
  //   db.query('SELECT * FROM store.products;', (err, result) => {
  //     if(err){
  //       console.log(err)
  //     }else{
  //         res.status(200).json({
  //             status: 'success',
  //             data: {
  //                 result
  //             }})
  //
  //     }
  //   })
  // }else{
  //   res.json('Access forbidden')
  // }

});

module.exports = router;
