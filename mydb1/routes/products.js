var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var db = req.con;
    var data = '';
    db.query('SELECT * FROM product;', function(req, rows) {
        data = rows;
        console.log(data);
        res.render('products', { title: 'products', data: data });
    });




});

module.exports = router;