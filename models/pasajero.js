'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pasajero = sequelize.define('Pasajero', {
    pa_codigo: DataTypes.STRING,
    pa_nombre: DataTypes.STRING,
    pa_apellido_paterno: DataTypes.STRING,
    pa_apellido_materno: DataTypes.STRING,
    pa_carnet_identidad: DataTypes.INTEGER,
    pa_carnet_lugar_exp: DataTypes.STRING,
    pa_direccion_domicilio: DataTypes.STRING,
    pa_telefono_fijo: DataTypes.NUMBER,
    pa_telefono_movil: DataTypes.NUMBER,
    pa_telefono_emergency: DataTypes.NUMBER,
    pa_status_covid: DataTypes.STRING,
    pa_estado: DataTypes.STRING
  }, {});
  Pasajero.associate = function(models) {
    // associations can be defined here
  };
  return Pasajero;
};