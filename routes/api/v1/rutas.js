var express = require('express');
var router = express.Router();
// Nombre del modelo
const TYPE_MODEL = "Tabla";
const NAME_MODEL = "Ruta";
// Sequelize: MODELS
var models = require("../../../models");
// MODEL
let modelRutas = models.Ruta;
// GET: Listado de Registros de tipo Rutas
router.get('/', function (req, res, next) {
  // OPERATION
  let operation = "Listar los registros"

  modelRutas
    .findAll()
    .then(function (listaRutas) {
      const resultOK = {
        estado: 200,
        mensaje: `La operacion ${operation} de ${NAME_MODEL} fue un exito`,
        data: listaRutas
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

/* GET Encontrar un Rutas por su id */
router.get("/:ru_ruta", function (req, res, next) {
  // OPERATION
  let operation = "Encontrar un(a) Ruta por su ID"
  // ID
  var id = req.params.ru_ruta;

  modelRutas
    .findByPk(id)
    .then(function (Rutas) {
      // Respuesta
      let respuesta = {};
      let statusCode = 200;

      if (Rutas !== undefined && Rutas !== null) {
        respuesta = {
          estado: 200,
          mensaje: `La operacion ${operation} fue un exito`,
          data: Rutas
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

/* POST: Creacion de un nuevo Rutas  */
router.post("/", function (req, res, next) {
  // OPERATION
  let operation = "Crear un(a) nuevo Ruta"
  // Request Data
  let dataRutaToCreate = req.body;

  modelRutas
    .create(dataRutaToCreate)
    .then(rutaCreated => {
      let resCreated = {
        estado: 201,
        mensaje: `La operacion ${operation} de ${NAME_MODEL} fue un exito`,
        data: rutaCreated
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