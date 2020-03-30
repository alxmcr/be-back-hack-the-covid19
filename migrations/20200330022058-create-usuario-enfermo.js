'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UsuarioEnfermo', {
      ue_usuario_enfermo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ue_tipo_enfermedad: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ue_codigo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ue_nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ue_apellido_paterno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ue_apellido_materno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ue_carnet_identidad: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      ue_carnet_lugar_exp: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ue_direccion_domicilio: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ue_telefono_fijo: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      ue_telefono_movil: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      ue_telefono_emergency: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      ue_avatar: {
        type: Sequelize.STRING
      },
      ue_status_covid: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      ue_estado: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
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
    return queryInterface.dropTable('UsuarioEnfermo');
  }
};