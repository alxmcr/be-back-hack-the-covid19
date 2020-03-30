'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsuarioEnfermo = sequelize.define('UsuarioEnfermo', {
    ue_usuario_enfermo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    ue_tipo_enfermedad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ue_codigo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ue_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ue_apellido_paterno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ue_apellido_materno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ue_carnet_identidad: {
      type: DataTypes.NUMBER
    },
    ue_carnet_lugar_exp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ue_direccion_domicilio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ue_telefono_fijo: {
      type: DataTypes.NUMBER
    },
    ue_telefono_movil: {
      type: DataTypes.NUMBER
    },
    ue_telefono_emergency: {
      type: DataTypes.NUMBER
    },
    ue_status_covid: {
      type: DataTypes.BOOLEAN
    },
    ue_estado: {
      type: DataTypes.BOOLEAN
    }
  }, {
    tableName: "UsuarioEnfermo"
  });
  UsuarioEnfermo.associate = function (models) {
    // associations can be defined here
  };
  return UsuarioEnfermo;
};