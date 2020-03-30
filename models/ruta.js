'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ruta = sequelize.define('Ruta', {
    ru_ruta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    ru_codigo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ru_lugar_partida: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ru_lugar_destino: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ru_estado: {
      type: DataTypes.BOOLEAN,
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