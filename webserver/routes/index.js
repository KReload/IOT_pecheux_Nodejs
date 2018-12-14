var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  res.render('form');
});

router.get('/liste', function(req, res, next) {
  request.get('http://localhost:3000/patients/', function(err,response,body){
    console.log(body);
    res.render('patients', {patients: body});
  });
});


module.exports = router;
