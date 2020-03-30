'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    us_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    us_tipo_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    us_codigo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    us_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    us_apellido_paterno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    us_apellido_materno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    us_carnet_identidad: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    us_carnet_lugar_exp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    us_direccion_domicilio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    us_telefono_fijo: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    us_telefono_movil: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    us_telefono_emergency: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    us_licencia_conducir: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    us_categoria_licencia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    us_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    us_username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    us_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    us_status_covid: {
      type: DataTypes.BOOLEAN,
    },
    us_estado: {
      type: DataTypes.BOOLEAN,
    }
  }, {
    tableName: "Usuario"
  });
  Usuario.associate = function (models) {
    // associations can be defined here
  };
  return Usuario;
};