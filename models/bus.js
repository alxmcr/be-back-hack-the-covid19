'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bus = sequelize.define('Bus', {
    bu_bus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    bu_codigo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bu_placa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ru_ruta: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bu_estado: {
      type: DataTypes.BOOLEAN,
    }
  }, {
    tableName: "Bus"
  });
  Bus.associate = function (models) {
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