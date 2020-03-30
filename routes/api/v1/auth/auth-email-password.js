var express = require('express');
var router = express.Router();
// Nombre del modelo
const TYPE_MODEL = "Tabla";
const NAME_MODEL = "Usuario";
// Sequelize: MODELS
var models = require("../../../../models");
// MODEL
let modelUsuario = models.Usuario;

// POST: Iniciar sesion mediante el email y password
router.post('/', function (req, res, next) {
  // OPERATION
  let operation = "Iniciar sesion mediante el email y password"

  // BODY
  const { us_email, us_password } = req.body;

  modelUsuario
    .findOne({
      where: { us_email, us_password }
    })
    .then(function (usuarioFull) {
      const { us_usuario, us_nombre, us_apellido_paterno, us_apellido_materno } = usuarioFull;

      const resultOK = {
        estado: 200,
        mensaje: `La operacion ${operation} de ${NAME_MODEL} fue un exito`,
        data: { us_usuario, us_nombre, us_apellido_paterno, us_apellido_materno }
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
