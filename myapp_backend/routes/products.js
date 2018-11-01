var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    var db = req.con;
    var data = '';

    db.query('SELECT * from product', function(err, rows) {
        if (err) {
            console.log(err);
        }
        data = rows;
        console.log(data);
        console.log(JSON.stringify(data));
        //res.json(data);
        //res.send(JSON.stringify(data));
        res.render('products', { title: 'Product List', data: data });
    });
});

router.get('/edit', function(req, res, next) {
    var db = req.con;
    var id = req.query.id;

    db.query('SELECT * from product where id=?', id, function(err, rows) {
        if (err) {
            console.log(err);
        }
        data = rows;
        console.log(JSON.stringify(data));

        res.render('productEdit', {
            title: 'Product Edit',
            data: data
        });
    });
})

router.post('/edit', function(req, res, next) {
    var db = req.con;
    var id = req.body.id;

        var sql= {
            
            name: req.body.name,
            price: req.body.price
        };

        var qur = db.query('UPDATE product set ? where id =?', [sql, id], function(err, rows){
           if (err) {
               console.log(err);
           }

           res.setHeader('Content-Type', 'application/json');
           res.redirect('/products');
        });
})


router.get('/delete', function(req, res, next) {
    var db = req.con;
    var id = req.query.id;

    db.query('DELETE from product where id=?', id, function(err, rows) {
        if (err) {
            console.log(err);
        }
        data = rows;
        console.log(data);

        res.redirect('/products');
    });

})

router.get('/add', function(req, res, next) {

        res.render('productAdd' , {
            title: 'Add Product',
            msg: ''
        });
})

router.post('/add', function(req, res, next) {
    var db = req.con;

        var sql= {
            id: req.body.id,
            name: req.body.name,
            price: req.body.price
        };

        var qur = db.query('INSERT INTO product set ?', sql, function(err, rows){
           if (err) {
               console.log(err);
           }

           res.setHeader('Content-Type', 'application/json');
           res.redirect('/products');
        });
})
module.exports = router;