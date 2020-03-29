'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bus = sequelize.define('Bus', {
    bu_codigo: DataTypes.STRING,
    bu_placa: DataTypes.INTEGER,
    ru_ruta: DataTypes.INTEGER,
    bu_estado: DataTypes.STRING
  }, {
    tableName: "Bus"
  });
  Bus.associate = function(models) {
    // associations can be defined here
  };
  return Bus;
};