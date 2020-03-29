var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/tienes', function(req, res, next) {
  res.send('Listado de las relaciones tienes');
});

module.exports = router;