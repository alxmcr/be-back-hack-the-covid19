var express = require('express');
var router = express.Router();

// GET: Listado de Usuarios Enfermos
router.get('/', function(req, res, next) {
  res.send('Listado de Usuarios Enfermos');
});

module.exports = router;