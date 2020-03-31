var express = require('express');
var router = express.Router();
// Nombre del modelo
const TYPE_MODEL = "Tabla";
const NAME_MODEL = "Bus";
// Sequelize: MODELS
var models = require("../../../models");
// MODEL
let modelBus = models.Bus;
// GET: Listado de Registros de tipo Bus
router.get('/', function (req, res, next) {
  // OPERATION
  let operation = "Listar los registros"

  modelBus
    .findAll()
    .then(function (listaBus) {
      const resultOK = {
        estado: 200,
        mensaje: `La operacion ${operation} de ${NAME_MODEL} fue un exito`,
        data: listaBus
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

/* GET Encontrar un bus por su id */
router.get("/:bu_bus", function (req, res, next) {
  // OPERATION
  let operation = "Encontrar un bus por su ID"
  // ID
  var id = req.params.bu_bus;

  modelBus
    .findByPk(id)
    .then(function (bus) {
      // Respuesta
      let respuesta = {};
      let statusCode = 200;

      if (bus !== undefined && bus !== null) {
        respuesta = {
          estado: 200,
          mensaje: `La operacion ${operation} fue un exito`,
          data: bus
        }
      } else {
        statusCode = 404
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

/* POST: Creacion de un nuevo bus  */
router.post("/", function (req, res, next) {
  // OPERATION
  let operation = "Crear un(a) nuevo bus"
  // Request Data
  let dataBusToCreate = req.body;

  modelBus
    .create(dataBusToCreate)
    .then(busCreated => {
      let resCreated = {
        estado: 201,
        mensaje: `La operacion ${operation} de ${NAME_MODEL} fue un exito`,
        data: busCreated
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

/* PUT: Actualizar de un(a) Bus  */
router.put("/:bu_bus", function (req, res, next) {
  // OPERATION
  let operation = "Actualizar un(a) Bus"
  // ID
  let { bu_bus } = req.params;
  // Request Data
  let dataRutaToUpdate = req.body;
  // Condition
  let condition = {
    where: { bu_bus }
  };

  modelBus
    .update(dataRutaToUpdate, condition)
    .then(busUpdated => {
      let resUpdated = {
        estado: 200,
        mensaje: `La operacion ${operation} de ${NAME_MODEL} fue un exito`,
        data: busUpdated
      };
      res.status(200).json(resUpdated);
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

/* DELETE: Eliminar de un(a) bus  */
router.delete("/:bu_bus", function (req, res, next) {
  // OPERATION
  let operation = "Eliminar un(a) bus"
  // ID
  let { bu_bus } = req.params;
  // Condition
  let condition = {
    where: { bu_bus }
  };

  modelBus
    .destroy(condition)
    .then(() => {
      let resUpdated = {
        estado: 200,
        mensaje: `La operacion ${operation} de ${NAME_MODEL} fue un exito`,
        data: {}
      };
      res.status(200).json(resUpdated);
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