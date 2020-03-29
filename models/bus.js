'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bus = sequelize.define('Bus', {
    bu_codigo: DataTypes.STRING,
    bu_estado: DataTypes.STRING
  }, {});
  Bus.associate = function(models) {
    // associations can be defined here
  };
  return Bus;
};