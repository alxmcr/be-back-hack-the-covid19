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
        type: Sequelize.STRING,
        allowNull: false,
      },
      ru_lugar_partida: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      ru_lugar_destino: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ru_estado: {
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
    return queryInterface.dropTable('Ruta');
  }
};