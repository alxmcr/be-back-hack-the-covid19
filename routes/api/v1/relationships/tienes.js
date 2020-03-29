var express = require('express');
var router = express.Router();
// Nombre del modelo
const TYPE_MODEL = "Relacion";
const NAME_MODEL = "RelTienes";
// Sequelize: MODELS
var models = require("../../../../models");
/* GET users listing. */
router.get('/tienes', function(req, res, next) {
  res.send('Listado de las relaciones tienes');
});

module.exports = router;