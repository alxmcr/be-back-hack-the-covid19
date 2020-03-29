'use strict';
module.exports = (sequelize, DataTypes) => {
  const Viaje = sequelize.define('Viaje', {
    vi_codigo: {
      type: DataTypes.STRING
    },
    vi_fecha_viaje: {
      type: DataTypes.DATE
    },
    vi_hora_partida: {
      type: DataTypes.TIME
    },
    vi_hora_llegada: {
      type: DataTypes.TIME
    },
    bu_bus: {
      type: DataTypes.INTEGER
    },
    vi_estado: {
      type: DataTypes.STRING
    }
  }, {
    tableName: "Viaje"
  });
  Viaje.associate = function (models) {
    // associations can be defined here
    Viaje.belongsTo(models.Bus, {
      foreignKey: {
        name: "bu_bus",
        allowNull: false
      }
    });
  };
  return Viaje;
};