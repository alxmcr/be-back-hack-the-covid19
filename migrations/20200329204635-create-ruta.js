'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Ruta', {
      ru_ruta: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ru_codigo: {
        type: Sequelize.STRING
      },
      ru_lugar_partida: {
        type: Sequelize.STRING
      },
      ru_lugar_destino: {
        type: Sequelize.STRING
      },
      ru_estado: {
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
    return queryInterface.dropTable('Ruta');
  }
};