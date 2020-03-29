'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ruta = sequelize.define('Ruta', {
    ru_codigo: DataTypes.STRING,
    ru_lugar_partida: DataTypes.STRING,
    ru_lugar_destino: DataTypes.STRING,
    bu_estado: DataTypes.STRING
  }, {});
  Ruta.associate = function(models) {
    // associations can be defined here
  };
  return Ruta;
};