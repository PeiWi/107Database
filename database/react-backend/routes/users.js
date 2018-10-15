var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    res.json([{
        id: 1,
        username: "羅培瑋"
    }, {
        id: 2,
        username: "沈立婕"
    }, {
        id: 3,
        username: "周昊勳"
    }]);
});

module.exports = router;