var express = require('express');
var router = express.Router();

// GET: Listado de Buses
router.get('/', function(req, res, next) {
  res.send('Listado de Buses');
});

module.exports = router;