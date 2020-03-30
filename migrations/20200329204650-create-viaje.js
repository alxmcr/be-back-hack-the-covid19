'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Viaje', {
      vi_viaje: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vi_codigo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      vi_fecha_viaje: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      vi_hora_partida: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      vi_hora_llegada: {
        type: Sequelize.TIME,
      },
      bu_bus: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Bus",
          key: "bu_bus"
        }
      },
      vi_estado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Viaje');
  }
};