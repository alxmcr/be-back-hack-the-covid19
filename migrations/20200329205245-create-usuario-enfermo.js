'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UsuarioEnfermo', {
      uf_usuario_enfermo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uf_tipo_enfermedad: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      uf_codigo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      uf_nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      uf_apellido_paterno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      uf_apellido_materno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      uf_carnet_identidad: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      uf_carnet_lugar_exp: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      uf_direccion_domicilio: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      uf_telefono_fijo: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      uf_telefono_movil: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      uf_telefono_emergency: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      uf_status_covid: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      uf_estado: {
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
    return queryInterface.dropTable('UsuarioEnfermo');
  }
};