var express = require('express');
var router = express.Router();
// Nombre del modelo
const TYPE_MODEL = "Tabla";
const NAME_MODEL = "Bus";
// Sequelize: MODELS
var models = require("../../../models");
// GET: Listado de Registros de tipo Usuarios Enfermos
router.get('/', function(req, res, next) {
  res.send('Listado de Usuarios Enfermos');
});

module.exports = router;