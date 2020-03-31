// Configuration
const serverConfig = require(__dirname + '/config/server-config.json');
const host = serverConfig.HOST;
const port = serverConfig.PORT;
const versionAPI = serverConfig.API_VERSION;

var express = require('express');
var expressListEndpoints = require("express-list-endpoints");
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


// Definicion de las rutas
loadRoutes(app, versionAPI);

// TODO
console.log(expressListEndpoints(app));

// Listen
app.listen(port, host, function () {
    console.log(`Server is running on http://${host}:${port}`);
});

function loadRoutes(app, versionAPI) {
    var indexRouter = require("./routes/index");
    // API: Auth
    var authEmailRouter = require(`./routes/api/${versionAPI}/auth/auth-email-password`);
    var authUsernameRouter = require(`./routes/api/${versionAPI}/auth/auth-username-password`);

    // API: Entities
    var rutasRouter = require(`./routes/api/${versionAPI}/rutas`);
    var busesRouter = require(`./routes/api/${versionAPI}/buses`);
    var viajesRouter = require(`./routes/api/${versionAPI}/viajes`);
    var usuariosRouter = require(`./routes/api/${versionAPI}/usuarios`);
    var usuariosEnfermosRouter = require(`./routes/api/${versionAPI}/usuariosEnfermos`);

    // API: Relationships
    var tienesRouter = require(`./routes/api/${versionAPI}/relationships/tienes`);

    // For Default
    app.use("/", indexRouter);

    // Auth
    app.use(`/api/${versionAPI}/auth/email`, authEmailRouter);
    app.use(`/api/${versionAPI}/auth/username`, authUsernameRouter);

    // API: Entities
    app.use(`/api/${versionAPI}/rutas`, rutasRouter);
    app.use(`/api/${versionAPI}/buses`, busesRouter);
    app.use(`/api/${versionAPI}/viajes`, viajesRouter);
    app.use(`/api/${versionAPI}/usuarios`, usuariosRouter);
    app.use(`/api/${versionAPI}/usuarios-enfermos`, usuariosEnfermosRouter);
    // API: Relationships
    app.use(`/api/${versionAPI}/tienes`, tienesRouter);
}

module.exports = app;

