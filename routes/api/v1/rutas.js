var express = require('express');
var router = express.Router();
// Nombre del modelo
const TYPE_MODEL = "Tabla";
const NAME_MODEL = "Ruta";
// Sequelize: MODELS
var models = require("../../../models");
// GET: Listado de Rutas
router.get('/', function(req, res, next) {
  res.send('Listado de Rutas');
});

module.exports = router;