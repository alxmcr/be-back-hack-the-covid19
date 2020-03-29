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
        type: Sequelize.STRING,
        allowNull: false,
      },
      us_codigo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      us_nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      us_apellido_paterno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      us_apellido_materno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      us_carnet_identidad: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      us_carnet_lugar_exp: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      us_direccion_domicilio: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      us_telefono_fijo: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      us_telefono_movil: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      us_telefono_emergency: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      us_licencia_conducir: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      us_categoria_licencia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      us_status_covid: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      us_estado: {
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
    return queryInterface.dropTable('Usuario');
  }
};