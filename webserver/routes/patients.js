var express = require('express');
var router = express.Router();
var PatientController = require('../controller/patientController');
var patientController = new PatientController();

/* GET patients listing. */

router.post('/create', function (req, res) {
  patientController.create(req, res);
});

router.get('/:id', function (req, res) {
  patientController.findById(req, res);
});


router.delete('/:id', function (req, res) {
  patientController.deleteById(req, res);
});

router.put('/:id', function (req, res) {
  console.log(req.body)
  console.log(req)
  patientController.updatePos(req, res);
});

router.get('/', function (req, res) {
  patientController.findAll(res);
});

module.exports = router;
