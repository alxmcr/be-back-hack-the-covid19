var express = require("express");
var router = express.Router();
// Nombre del modelo
const TYPE_MODEL = "Relacion";
const NAME_MODEL = "RelTienes";
// Sequelize: MODELS
var models = require("../../../../models");
// MODELS
let modelRelTienes = models.RelTiene;
let modelViaje = models.Viaje;
let modelUsuario = models.Usuario;
// GET: Listado de Registros de tipo RelTienes
router.get("/", function(req, res, next) {
  // OPERATION
  let operation = "Listar los registros";

  modelRelTienes
    .findAll({
      include: [{ model: modelViaje }, { model: modelUsuario }]
    })
    .then(function(listaRelTienes) {
      const resultOK = {
        estado: 200,
        mensaje: `La operacion ${operation} de ${NAME_MODEL} fue un exito`,
        data: listaRelTienes
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

/* GET: Buscar todas las relaciones Tiene de un determinado viaje  */
router.get("/viajes/:vi_viaje", function(req, res, next) {
  // OPERATION
  let operation = "Buscar todas las relaciones Tiene de un determinado viaje";
  // ID
  let { vi_viaje } = req.params;
  // Condition
  let condition = {
    where: { vi_viaje }
  };

  modelRelTienes
    .findAll(condition, {
      include: [{ model: modelUsuario }]
    })
    .then(function(listaRelTienes) {
      const resultOK = {
        estado: 200,
        mensaje: `La operacion ${operation} de ${NAME_MODEL} fue un exito`,
        data: listaRelTienes
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

/* GET: Buscar todas las relaciones Tiene de un determinado Usuario  */
router.get("/usuarios/:us_usuario", function(req, res, next) {
  // OPERATION
  let operation = "Buscar todas las relaciones Tiene de un determinado Usuario";
  // ID
  let { us_usuario } = req.params;
  // Condition
  let condition = {
    where: { us_usuario }
  };

  modelRelTienes
    .findAll(condition, {
      include: [{ model: modelViaje }]
    })
    .then(function(listaRelTienes) {
      const resultOK = {
        estado: 200,
        mensaje: `La operacion ${operation} de ${NAME_MODEL} fue un exito`,
        data: listaRelTienes
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

/* POST: Creacion de un nuevo RelTiene  */
router.post("/", function(req, res, next) {
  // OPERATION
  let operation = "Crear un(a) nuevo RelTiene";
  // Request Data
  let dataRelTieneToCreate = req.body;

  modelRelTienes
    .create(dataRelTieneToCreate)
    .then(RelTieneCreated => {
      let resCreated = {
        estado: 201,
        mensaje: `La operacion ${operation} de ${NAME_MODEL} fue un exito`,
        data: RelTieneCreated
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

/* DELETE: Eliminar una relacion Tiene por Viaje  */
router.delete("/:vi_viaje", function(req, res, next) {
  // OPERATION
  let operation = "Eliminar una relacion Tiene por Viaje";
  // ID
  let { vi_viaje } = req.params;
  // Condition
  let condition = {
    where: { vi_viaje }
  };

  modelRelTienes
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

/* DELETE: Eliminar una relacion Tiene por Usuario  */
router.delete("/:us_usuario", function(req, res, next) {
  // OPERATION
  let operation = "Eliminar una relacion Tiene por Usuario";
  // ID
  let { us_usuario } = req.params;
  // Condition
  let condition = {
    where: { us_usuario }
  };

  modelRelTienes
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
