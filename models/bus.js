'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bus = sequelize.define('Bus', {
    bu_codigo: {
      type: DataTypes.STRING
    },
    bu_placa: {
      type: DataTypes.STRING
    },
    ru_ruta: {
      type: DataTypes.INTEGER
    },
    bu_estado: {
      type: DataTypes.STRING
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