var express = require('express');
var router = express.Router();
// Nombre del modelo
const TYPE_MODEL = "Tabla";
const NAME_MODEL = "Ruta";
// Sequelize: MODELS
var models = require("../../../../models");
// MODEL
let modelRutas = models.Ruta;

// POST: Iniciar sesion mediante el email y password
router.post('/', function (req, res, next) {
  // OPERATION
  let operation = "Iniciar sesion mediante el email y password"

  modelRutas
    .findOne({
      where: { us_username: us_username }
    })
    .then(function (usuario) {
      const resultOK = {
        estado: 200,
        mensaje: `La operacion ${operation} de ${NAME_MODEL} fue un exito`,
        data: usuario
      }
      res.status(200).json(resultOK);
    })
    .catch(err => {
      console.log(err);
      const errorBackend = {
        estado: 500,
        mensaje: `Ocurrio un error con el ${operation} de ${NAME_MODEL}`,
        data: {}
      }
      res.status(500).send(errorBackend);
    });
});

module.exports = router;
