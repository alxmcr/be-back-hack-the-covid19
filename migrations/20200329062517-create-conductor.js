'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Conductors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      co_codigo: {
        type: Sequelize.STRING
      },
      co_nombre: {
        type: Sequelize.STRING
      },
      co_apellido_paterno: {
        type: Sequelize.STRING
      },
      co_apellido_materno: {
        type: Sequelize.STRING
      },
      co_carnet_identidad: {
        type: Sequelize.INTEGER
      },
      co_carnet_lugar_exp: {
        type: Sequelize.STRING
      },
      co_direccion_domicilio: {
        type: Sequelize.STRING
      },
      co_telefono_fijo: {
        type: Sequelize.NUMBER
      },
      co_telefono_movil: {
        type: Sequelize.NUMBER
      },
      co_telefono_emergency: {
        type: Sequelize.NUMBER
      },
      co_estado: {
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
    return queryInterface.dropTable('Conductors');
  }
};