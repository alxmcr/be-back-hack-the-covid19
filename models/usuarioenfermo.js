'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsuarioEnfermo = sequelize.define('UsuarioEnfermo', {
    uf_tipo_enfermedad: {
      type: DataTypes.STRING
    },
    uf_tipo_usuario: {
      type: DataTypes.STRING
    },
    uf_codigo: {
      type: DataTypes.STRING
    },
    uf_nombre: {
      type: DataTypes.STRING
    },
    uf_apellido_paterno: {
      type: DataTypes.STRING
    },
    uf_apellido_materno: {
      type: DataTypes.STRING
    },
    uf_carnet_identidad: {
      type: DataTypes.NUMBER
    },
    uf_carnet_lugar_exp: {
      type: DataTypes.STRING
    },
    uf_direccion_domicilio: {
      type: DataTypes.STRING
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
    uf_licencia_conducir: {
      type: DataTypes.STRING
    },
    uf_categoria_licencia: {
      type: DataTypes.STRING
    },
    uf_statuf_covid: {
      type: DataTypes.STRING
    },
    uf_estado: {
      type: DataTypes.STRING
    }
  }, {
    tableName: "UsuarioEnfermo"
  });
  UsuarioEnfermo.associate = function (models) {
    // associations can be defined here
  };
  return UsuarioEnfermo;
};