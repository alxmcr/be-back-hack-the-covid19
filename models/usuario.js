'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    us_tipo_usuario: {
      type: DataTypes.STRING
    },
    us_codigo: {
      type: DataTypes.STRING
    },
    us_nombre: {
      type: DataTypes.STRING
    },
    us_apellido_paterno: {
      type: DataTypes.STRING
    },
    us_apellido_materno: {
      type: DataTypes.STRING
    },
    us_carnet_identidad: {
      type: DataTypes.NUMBER
    },
    us_carnet_lugar_exp: {
      type: DataTypes.STRING
    },
    us_direccion_domicilio: {
      type: DataTypes.STRING
    },
    us_telefono_fijo: {
      type: DataTypes.NUMBER
    },
    us_telefono_movil: {
      type: DataTypes.NUMBER
    },
    us_telefono_emergency: {
      type: DataTypes.NUMBER
    },
    us_licencia_conducir: {
      type: DataTypes.STRING
    },
    us_categoria_licencia: {
      type: DataTypes.STRING
    },
    us_status_covid: {
      type: DataTypes.STRING
    },
    us_estado: {
      type: DataTypes.STRING
    }
  }, {
    tableName: "Usuario"
  });
  Usuario.associate = function (models) {
    // associations can be defined here
  };
  return Usuario;
};