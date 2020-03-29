'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ruta = sequelize.define('Ruta', {
    ru_codigo: {
      type: DataTypes.STRING
    },
    ru_lugar_partida: {
      type: DataTypes.STRING
    },
    ru_lugar_destino: {
      type: DataTypes.STRING
    },
    ru_estado: {
      type: DataTypes.STRING
    }
  }, {
    tableName: "Ruta"
  });
  Ruta.associate = function (models) {
    // associations can be defined here
    Ruta.hasMany(models.Bus, {
      foreignKey: {
        name: "ru_ruta",
        allowNull: false
      }
    });
  };
  return Ruta;
};