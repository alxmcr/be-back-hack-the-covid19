// Configuration
const serverConfig = require(__dirname + '/config/server-config.json');
const host = serverConfig.HOST;
const port = serverConfig.PORT;

var express = require('express');
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

// Definicion de las rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Listen
app.listen(port, host, function () {
    console.log(`Server is running on http://${host}:${port}`);
});

module.exports = app;
