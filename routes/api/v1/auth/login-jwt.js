var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");

// Models
var models = require("../../../../models");
// Model: Usuario
var Usuario = models.Usuario;
// MODEL: relPertenece
let relPerteneceModel = models.RelPertenece;
// Config
var CONFIG = require("../../../../config/jwtConfig");

// HTTP CODES
var Util = require("../../../../__constants/httpcodes");
// Handler Error
var fnHandlerError = require("../../../../__util/handlerErrorAPI");
// Expiration Time
var expirationTime = "24h";

/* POST: Login  */
router.post("/login", login);

async function login(req, res) {
  const { us_username, us_password } = req.body;

  try {
    const usuarioFoundByUsername = await Usuario.findOne({
      where: { us_username: us_username }
    });

    // console.log("usuarioFoundByUsername", usuarioFoundByUsername);

    if (
      usuarioFoundByUsername === null ||
      usuarioFoundByUsername === undefined
    ) {
      return res.status(Util.HttpCodes.HTTP_400_BAD_REQUEST).send({
        isAuth: false,
        roles: [],
        token: "",
        message: "El nombre de usuario es incorrecto.",
        user: null
      });
    }

    if (!usuarioFoundByUsername.validPassword(us_password)) {
      return res.status(Util.HttpCodes.HTTP_400_BAD_REQUEST).send({
        isAuth: false,
        roles: [],
        token: "",
        message: "El password es incorrecto.",
        user: null
      });
    }

    const {
      us_usuario,
      us_email,
      us_avatar,
      us_primer_nombre,
      us_segundo_nombre,
      us_paterno_apellido,
      us_materno_apellido,
      us_carnet,
      us_direccion,
      us_telefono_fijo,
      us_telefono_movil,
      us_active
    } = usuarioFoundByUsername;

    // ¿Is user active?
    if (us_active === null || us_active === undefined) {
      return res.status(Util.HttpCodes.HTTP_400_BAD_REQUEST).send({
        isAuth: false,
        roles: [],
        token: "",
        message: "La cuenta del usuario no tiene un estado valido.",
        user: null
      });
    }

    if (us_active) {
      const relationshipList = await relPerteneceModel.findAll({
        where: {
          us_usuario
        }
      });

      let idRoleList = [];

      if (relationshipList !== null && relationshipList !== undefined) {
        if (Array.isArray(relationshipList)) {
          if (relationshipList.length > 0) {
            relationshipList.forEach(relationship => {
              idRoleList.push(relationship.ro_role);
            });
          }
        }
      } else {
        res.status(Util.HttpCodes.HTTP_500_INTERNAL_SERVER_ERROR).send({
          isAuth: false,
          roles: [],
          token: "",
          message: "El usuario no tiene al menos un rol asignado",
          user: null
        });
      }

      // JWT: Payload
      const payload = {
        us_usuario,
        us_username,
        us_email,
        us_avatar,
        us_primer_nombre,
        us_segundo_nombre,
        us_paterno_apellido,
        us_materno_apellido,
        us_carnet,
        us_direccion,
        us_telefono_fijo,
        us_telefono_movil,
        us_active
      };

      // JWT: Generate token
      jwt.sign(
        payload,
        CONFIG.SECRET_TOKEN,
        { expiresIn: expirationTime },
        function(err, token) {
          if (err) {
            res.status(Util.HttpCodes.HTTP_500_INTERNAL_SERVER_ERROR).send({
              isAuth: false,
              roles: [],
              token: "",
              message: err.message,
              user: null
            });
          } else {
            res.status(Util.HttpCodes.HTTP_200_OK).send({
              isAuth: true,
              roles: idRoleList,
              token,
              message: "Bienvenido!",
              user: {
                us_usuario,
                us_avatar,
                us_primer_nombre,
                us_segundo_nombre,
                us_paterno_apellido,
                us_materno_apellido
              }
            });
          }
        }
      );
    } else {
      return res.status(Util.HttpCodes.HTTP_400_BAD_REQUEST).send({
        isAuth: false,
        roles: [],
        token: "",
        message: "La cuenta del usuario esta deshabilitada. Consulte con el administrador.",
        user: null
      });
    }
  } catch (error) {
    res.status(Util.HttpCodes.HTTP_500_INTERNAL_SERVER_ERROR).send({
      user: null,
      isAuth: false,
      token: "",
      message: error.message
    });
  }
}

module.exports = router;
