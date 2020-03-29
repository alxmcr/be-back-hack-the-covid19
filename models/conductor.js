'use strict';
module.exports = (sequelize, DataTypes) => {
  const Conductor = sequelize.define('Conductor', {
    co_codigo: DataTypes.STRING,
    co_nombre: DataTypes.STRING,
    co_apellido_paterno: DataTypes.STRING,
    co_apellido_materno: DataTypes.STRING,
    co_carnet_identidad: DataTypes.INTEGER,
    co_carnet_lugar_exp: DataTypes.STRING,
    co_direccion_domicilio: DataTypes.STRING,
    co_telefono_fijo: DataTypes.NUMBER,
    co_telefono_movil: DataTypes.NUMBER,
    co_telefono_emergency: DataTypes.NUMBER,
    co_estado: DataTypes.STRING
  }, {});
  Conductor.associate = function(models) {
    // associations can be defined here
  };
  return Conductor;
};