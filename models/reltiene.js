'use strict';
module.exports = (sequelize, DataTypes) => {
  const RelTiene = sequelize.define('RelTiene', {
    vi_viaje: DataTypes.INTEGER,
    us_usuario: DataTypes.INTEGER
  }, {
    tableName: "RelTiene",
    timestamps: false
  });
  RelTiene.associate = function (models) {
    // associations can be defined here
    RelTiene.belongsTo(models.Viaje, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "vi_viaje",
        allowNull: false
      }
    });

    RelTiene.belongsTo(models.Usuario, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "us_usuario",
        allowNull: false
      }
    });
  };
  return RelTiene;
};