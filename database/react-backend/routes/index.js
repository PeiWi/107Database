var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { id: '404081134', name: 'PeiWei' });
});

module.exports = router;