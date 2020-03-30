var express = require('express');
var router = express.Router();
// Nombre del modelo
const TYPE_MODEL = "Relacion";
const NAME_MODEL = "RelTienes";
// Sequelize: MODELS
var models = require("../../../../models");
// MODEL
let modelRelTienes = models.RelTiene;
// GET: Listado de Registros de tipo RelTienes
router.get('/', function (req, res, next) {
  // OPERATION
  let operation = "Listar los registros"

  modelRelTienes
    .findAll()
    .then(function (listaRelTienes) {
      const resultOK = {
        estado: 200,
        mensaje: `La operacion ${operation} de ${NAME_MODEL} fue un exito`,
        data: listaRelTienes
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

/* POST: Creacion de un nuevo RelTiene  */
router.post("/", function (req, res, next) {
  // OPERATION
  let operation = "Crear un(a) nuevo RelTiene"
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
      }
      res.status(500).send(errorBackend);
    });
});

module.exports = router;