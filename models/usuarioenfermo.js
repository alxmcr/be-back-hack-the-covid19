'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsuarioEnfermo = sequelize.define('UsuarioEnfermo', {
    uf_usuario_enfermo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    uf_tipo_enfermedad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uf_codigo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uf_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uf_apellido_paterno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uf_apellido_materno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uf_carnet_identidad: {
      type: DataTypes.NUMBER
    },
    uf_carnet_lugar_exp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uf_direccion_domicilio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uf_telefono_fijo: {
      type: DataTypes.NUMBER
    },
    uf_telefono_movil: {
      type: DataTypes.NUMBER
    },
    uf_telefono_emergency: {
      type: DataTypes.NUMBER
    },
    uf_status_covid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uf_estado: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: "UsuarioEnfermo"
  });
  UsuarioEnfermo.associate = function (models) {
    // associations can be defined here
  };
  return UsuarioEnfermo;
};