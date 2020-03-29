var express = require('express');
var router = express.Router();

// GET: Listado de Viajes
router.get('/', function(req, res, next) {
  res.send('Listado de Viajes');
});

module.exports = router;