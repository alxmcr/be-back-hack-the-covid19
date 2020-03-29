'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bus = sequelize.define('Bus', {
    bu_codigo: DataTypes.STRING,
    bu_placa: DataTypes.STRING,
    ru_ruta: DataTypes.INTEGER,
    bu_estado: DataTypes.STRING
  }, {
    tableName: "Bus"
  });
  Bus.associate = function(models) {
    // associations can be defined here
    Bus.belongsTo(models.Ruta, {
      foreignKey: {
        name: "ru_ruta",
        allowNull: false
      }
    });

    Bus.hasMany(models.Viaje, {
      foreignKey: {
        name: "vi_viaje",
        allowNull: false
      }
    });
  };
  return Bus;
};