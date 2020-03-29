var express = require('express');
var router = express.Router();

// GET: Listado de Rutas
router.get('/', function(req, res, next) {
  res.send('Listado de Rutas');
});

module.exports = router;