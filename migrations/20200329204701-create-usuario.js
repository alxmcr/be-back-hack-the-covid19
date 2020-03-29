'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Usuario', {
      us_usuario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      us_tipo_usuario: {
        type: Sequelize.STRING
      },
      us_codigo: {
        type: Sequelize.STRING
      },
      us_nombre: {
        type: Sequelize.STRING
      },
      us_apellido_paterno: {
        type: Sequelize.STRING
      },
      us_apellido_materno: {
        type: Sequelize.STRING
      },
      us_carnet_identidad: {
        type: Sequelize.NUMBER
      },
      us_carnet_lugar_exp: {
        type: Sequelize.STRING
      },
      us_direccion_domicilio: {
        type: Sequelize.STRING
      },
      us_telefono_fijo: {
        type: Sequelize.NUMBER
      },
      us_telefono_movil: {
        type: Sequelize.NUMBER
      },
      us_telefono_emergency: {
        type: Sequelize.NUMBER
      },
      us_licencia_conducir: {
        type: Sequelize.STRING
      },
      us_categoria_licencia: {
        type: Sequelize.STRING
      },
      us_status_covid: {
        type: Sequelize.STRING
      },
      us_estado: {
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
    return queryInterface.dropTable('Usuario');
  }
};