const express = require('express');
const router = express.Router();
const petsController = require('../controllers/petsController')
const serviceController = require('../controllers/serviceController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pets', petsController.index);

router.get('/service', serviceController.index);

module.exports = router;
