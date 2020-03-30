var express = require('express');
var router = express.Router();
// Nombre del modelo
const TYPE_MODEL = "Tabla";
const NAME_MODEL = "Usuario";
// Sequelize: MODELS
var models = require("../../../models");
// MODEL
let modelUsuario = models.Usuario;
// GET: Listado de Registros de tipo Usuario
router.get('/', function (req, res, next) {
  // OPERATION
  let operation = "Listar los registros"

  modelUsuario
    .findAll()
    .then(function (listaUsuario) {
      const resultOK = {
        estado: 200,
        mensaje: `La operacion ${operation} de ${NAME_MODEL} fue un exito`,
        data: listaUsuario
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

/* GET Encontrar un Usuario por su id */
router.get("/:us_usuario", function (req, res, next) {
  // OPERATION
  let operation = "Encontrar un Usuario por su ID"
  // ID
  var id = req.params.us_usuario;

  modelUsuario
    .findByPk(id)
    .then(function (Usuario) {
      // Respuesta
      let respuesta = {};
      let statusCode = 200;

      if (Usuario !== undefined && Usuario !== null) {
        respuesta = {
          estado: 200,
          mensaje: `La operacion ${operation} fue un exito`,
          data: Usuario
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

/* POST: Creacion de un nuevo Usuario  */
router.post("/", function (req, res, next) {
  // OPERATION
  let operation = "Crear un(a) nuevo Usuario"
  // Request Data
  let dataUsuarioToCreate = req.body;

  modelUsuario
    .create(dataUsuarioToCreate)
    .then(UsuarioCreated => {
      let resCreated = {
        estado: 201,
        mensaje: `La operacion ${operation} de ${NAME_MODEL} fue un exito`,
        data: UsuarioCreated
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