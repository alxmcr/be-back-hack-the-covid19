'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Viajes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vi_codigo: {
        type: Sequelize.STRING
      },
      vi_fecha_viaje: {
        type: Sequelize.DATE
      },
      vi_hora_partida: {
        type: Sequelize.TIME
      },
      vi_hora_llegada: {
        type: Sequelize.TIME
      },
      bu_bus: {
        type: Sequelize.INTEGER
      },
      co_conductor: {
        type: Sequelize.INTEGER
      },
      vi_estado: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Viajes');
  }
};