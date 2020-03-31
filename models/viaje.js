"use strict";
module.exports = (sequelize, DataTypes) => {
  const Viaje = sequelize.define(
    "Viaje",
    {
      vi_viaje: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      vi_codigo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      vi_fecha_viaje: {
        type: DataTypes.DATE,
        allowNull: false
      },
      vi_hora_partida: {
        type: DataTypes.TIME
      },
      vi_hora_llegada: {
        type: DataTypes.TIME
      },
      bu_bus: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      vi_estado: {
        type: DataTypes.BOOLEAN
      }
    },
    {
      tableName: "Viaje"
    }
  );
  Viaje.associate = function(models) {
    // associations can be defined here
    Viaje.belongsTo(models.Bus, {
      foreignKey: {
        name: "bu_bus",
        allowNull: false
      }
    });

    // belongsToMany:
    // adiciona a la tabla RelTiene una foreignKey 'vi_viaje'
    Viaje.belongsToMany(models.Usuario, {
      through: models.RelTiene,
      foreignKey: "vi_viaje"
    });
  };
  return Viaje;
};
