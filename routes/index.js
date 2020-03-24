var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  let data = { title: 'Express' };

  data.title = 'Hello Express!!';

  res.render('index', data);
});

module.exports = router;