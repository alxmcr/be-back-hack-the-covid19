var express = require('express');
var router = express.Router();
// Nombre del modelo
const TYPE_MODEL = "Tabla";
const NAME_MODEL = "Usuario Enfermo";
// Sequelize: MODELS
var models = require("../../../models");
// MODEL
let modelUsuarioEnfermo = models.UsuarioEnfermo;
// GET: Listado de Registros de tipo UsuarioEnfermo
router.get('/', function (req, res, next) {
  // OPERATION
  let operation = "Listar los registros"

  modelUsuarioEnfermo
    .findAll()
    .then(function (listaUsuarioEnfermo) {
      const resultOK = {
        estado: 200,
        mensaje: `La operacion ${operation} de ${NAME_MODEL} fue un exito`,
        data: listaUsuarioEnfermo
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

/* GET Encontrar un UsuarioEnfermo por su id */
router.get("/:ue_usuario_enfermo", function (req, res, next) {
  // OPERATION
  let operation = "Encontrar un Usuario Enfermo por su ID"
  // ID
  var id = req.params.ue_usuario_enfermo;

  modelUsuarioEnfermo
    .findByPk(id)
    .then(function (UsuarioEnfermo) {
      // Respuesta
      let respuesta = {};
      let statusCode = 200;

      if (UsuarioEnfermo !== undefined && UsuarioEnfermo !== null) {
        respuesta = {
          estado: 200,
          mensaje: `La operacion ${operation} fue un exito`,
          data: UsuarioEnfermo
        }
      } else {
        statusCode = 404;
        respuesta = {
          estado: 404,
          mensaje: `Ocurrio un error con el ${operation} de ${NAME_MODEL}, no se pudo encontrar el registro con el id ${id}`,
          data: {}
        }
      }

      res.status(statusCode).json(respuesta);
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

/* POST: Creacion de un nuevo UsuarioEnfermo  */
router.post("/", function (req, res, next) {
  // OPERATION
  let operation = "Crear un(a) nuevo Usuario Enfermo"
  // Request Data
  let dataUsuarioEnfermoToCreate = req.body;

  modelUsuarioEnfermo
    .create(dataUsuarioEnfermoToCreate)
    .then(UsuarioEnfermoCreated => {
      let resCreated = {
        estado: 201,
        mensaje: `La operacion ${operation} de ${NAME_MODEL} fue un exito`,
        data: UsuarioEnfermoCreated
      };
      res.status(201).json(resCreated);
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