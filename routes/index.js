var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.status(200).send({
    message: "Bienvenido al API REST de la tienda online"
  });
});

module.exports = router;