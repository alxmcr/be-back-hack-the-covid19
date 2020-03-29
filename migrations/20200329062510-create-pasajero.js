'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pasajeros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pa_codigo: {
        type: Sequelize.STRING
      },
      pa_nombre: {
        type: Sequelize.STRING
      },
      pa_apellido_paterno: {
        type: Sequelize.STRING
      },
      pa_apellido_materno: {
        type: Sequelize.STRING
      },
      pa_carnet_identidad: {
        type: Sequelize.INTEGER
      },
      pa_carnet_lugar_exp: {
        type: Sequelize.STRING
      },
      pa_direccion_domicilio: {
        type: Sequelize.STRING
      },
      pa_telefono_fijo: {
        type: Sequelize.NUMBER
      },
      pa_telefono_movil: {
        type: Sequelize.NUMBER
      },
      pa_telefono_emergency: {
        type: Sequelize.NUMBER
      },
      pa_status_covid: {
        type: Sequelize.STRING
      },
      pa_estado: {
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
    return queryInterface.dropTable('Pasajeros');
  }
};