'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ruta = sequelize.define('Ruta', {
    ru_codigo: DataTypes.STRING,
    ru_lugar_partida: DataTypes.STRING,
    ru_lugar_destino: DataTypes.STRING,
    ru_estado: DataTypes.STRING
  }, {
    tableName: "Ruta"
  });
  Ruta.associate = function(models) {
    // associations can be defined here
  };
  return Ruta;
};