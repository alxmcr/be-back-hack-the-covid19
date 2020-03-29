'use strict';
module.exports = (sequelize, DataTypes) => {
  const Viaje = sequelize.define('Viaje', {
    vi_codigo: DataTypes.STRING,
    vi_fecha_viaje: DataTypes.DATE,
    vi_hora_partida: DataTypes.TIME,
    vi_hora_llegada: DataTypes.TIME,
    bu_bus: DataTypes.INTEGER,
    vi_estado: DataTypes.STRING
  }, {
    tableName: "Viaje"
  });
  Viaje.associate = function(models) {
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