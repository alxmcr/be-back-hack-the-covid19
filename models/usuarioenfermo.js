'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsuarioEnfermo = sequelize.define('UsuarioEnfermo', {
    uf_tipo_enfermedad: DataTypes.STRING,
    uf_codigo: DataTypes.STRING,
    uf_nombre: DataTypes.STRING,
    uf_apellido_paterno: DataTypes.STRING,
    uf_apellido_materno: DataTypes.STRING,
    uf_carnet_identidad: DataTypes.NUMBER,
    uf_carnet_lugar_exp: DataTypes.STRING,
    uf_direccion_domicilio: DataTypes.STRING,
    uf_telefono_fijo: DataTypes.NUMBER,
    uf_telefono_movil: DataTypes.NUMBER,
    uf_telefono_emergency: DataTypes.NUMBER,
    uf_status_covid: DataTypes.STRING,
    uf_estado: DataTypes.STRING
  }, {
    tableName: "UsuarioEnfermo"
  });
  UsuarioEnfermo.associate = function(models) {
    // associations can be defined here
  };
  return UsuarioEnfermo;
};