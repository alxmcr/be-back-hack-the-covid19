var express = require('express');
var router = express.Router();

// GET: Listado de Usuarios
router.get('/', function(req, res, next) {
  res.send('Listado de Usuarios');
});

module.exports = router;