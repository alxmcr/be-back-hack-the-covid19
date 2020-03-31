var express = require("express");
var router = express.Router();
// Nombre del modelo
const TYPE_MODEL = "Tabla";
const NAME_MODEL = "Viaje";
// Sequelize: MODELS
var models = require("../../../models");
// MODEL
let modelViaje = models.Viaje;
// GET: Listado de Registros de tipo Viaje
router.get("/", function(req, res, next) {
  // OPERATION
  let operation = "Listar los registros";

  modelViaje
    .findAll()
    .then(function(listaViaje) {
      const resultOK = {
        estado: 200,
        mensaje: `La operacion ${operation} de ${NAME_MODEL} fue un exito`,
        data: listaViaje
      };
      res.status(200).json(resultOK);
    })
    .catch(err => {
      console.log(err);
      const errorBackend = {
        estado: 500,
        mensaje: `Ocurrio un error con el ${operation} de ${NAME_MODEL}`,
        data: {}
      };
      res.status(500).send(errorBackend);
    });
});

/* GET Encontrar un Viaje por su id */
router.get("/:vi_viaje", function(req, res, next) {
  // OPERATION
  let operation = "Encontrar un Viaje por su ID";
  // ID
  var id = req.params.vi_viaje;

  modelViaje
    .findByPk(id)
    .then(function(Viaje) {
      // Respuesta
      let respuesta = {};
      let statusCode = 200;

      if (Viaje !== undefined && Viaje !== null) {
        respuesta = {
          estado: 200,
          mensaje: `La operacion ${operation} fue un exito`,
          data: Viaje
        };
      } else {
        statusCode = 404;
        respuesta = {
          estado: 404,
          mensaje: `Ocurrio un error con el ${operation} de ${NAME_MODEL}, no se pudo encontrar el registro con el id ${id}`,
          data: {}
        };
      }

      res.status(statusCode).json(respuesta);
    })
    .catch(err => {
      console.log(err);
      const errorBackend = {
        estado: 500,
        mensaje: `Ocurrio un error con el ${operation} de ${NAME_MODEL}`,
        data: {}
      };
      res.status(500).send(errorBackend);
    });
});

/* GET: Buscar los viajes de un terminado bus  */
router.get("/buses/:bu_bus", function(req, res, next) {
  // OPERATION
  let operation = "Buscar los viajes de un terminado bus";
  // ID
  let { bu_bus } = req.params;
  // Condition
  let condition = {
    where: { bu_bus }
  };

  modelViaje
    .findAll(condition)
    .then(function(listaViaje) {
      const resultOK = {
        estado: 200,
        mensaje: `La operacion ${operation} de ${NAME_MODEL} fue un exito`,
        data: listaViaje
      };
      res.status(200).json(resultOK);
    })
    .catch(err => {
      console.log(err);
      const errorBackend = {
        estado: 500,
        mensaje: `Ocurrio un error con el ${operation} de ${NAME_MODEL}`,
        data: {}
      };
      res.status(500).send(errorBackend);
    });
});

/* POST: Creacion de un nuevo Viaje  */
router.post("/", function(req, res, next) {
  // OPERATION
  let operation = "Crear un(a) nuevo Viaje";
  // Request Data
  let dataViajeToCreate = req.body;

  modelViaje
    .create(dataViajeToCreate)
    .then(ViajeCreated => {
      let resCreated = {
        estado: 201,
        mensaje: `La operacion ${operation} de ${NAME_MODEL} fue un exito`,
        data: ViajeCreated
      };
      res.status(201).json(resCreated);
    })
    .catch(err => {
      console.log(err);
      const errorBackend = {
        estado: 500,
        mensaje: `Ocurrio un error con el ${operation} de ${NAME_MODEL}`,
        data: {}
      };
      res.status(500).send(errorBackend);
    });
});

/* PUT: Actualizar  un(a) Viaje  */
router.put("/:vi_viaje", function(req, res, next) {
  // OPERATION
  let operation = "Actualizar un(a) Viaje";
  // ID
  let { vi_viaje } = req.params;
  // Request Data
  let dataViajeToUpdate = req.body;
  // Condition
  let condition = {
    where: { vi_viaje }
  };

  modelViaje
    .update(dataViajeToUpdate, condition)
    .then(viajeUpdated => {
      let resUpdated = {
        estado: 200,
        mensaje: `La operacion ${operation} de ${NAME_MODEL} fue un exito`,
        data: viajeUpdated
      };
      res.status(200).json(resUpdated);
    })
    .catch(err => {
      console.log(err);
      const errorBackend = {
        estado: 500,
        mensaje: `Ocurrio un error con el ${operation} de ${NAME_MODEL}`,
        data: {}
      };
      res.status(500).send(errorBackend);
    });
});

/* DELETE: Eliminar de un(a) Viaje  */
router.delete("/:vi_viaje", function(req, res, next) {
  // OPERATION
  let operation = "Eliminar un(a) Viaje";
  // ID
  let { vi_viaje } = req.params;
  // Condition
  let condition = {
    where: { vi_viaje }
  };

  modelViaje
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
      };
      res.status(500).send(errorBackend);
    });
});

module.exports = router;
