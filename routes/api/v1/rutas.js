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

/* GET Rutascar un Rutas por su id */
router.get("/:bu_Rutas", function (req, res, next) {
  // OPERATION
  let operation = "Buscar un Ruta por su ID"
  // ID
  var id = req.params.bu_Rutas;

  modelRutas
    .findByPk(id)
    .then(function (Rutas) {
      // Respuesta
      let respuesta = {};

      if (Rutas !== undefined && Rutas !== null) {
        respuesta = {
          estado: 200,
          mensaje: `La operacion ${operation} de ${NAME_MODEL} fue un exito`,
          data: Rutas
        }
      } else {
        respuesta = {
          estado: 404,
          mensaje: `Ocurrio un error con el ${operation} de ${NAME_MODEL}, no se pudo encontrar el registro con el id ${id}`,
          data: {}
        }
      }

      res.status(respuesta.statusCode).json(respuesta);
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
  console.log

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