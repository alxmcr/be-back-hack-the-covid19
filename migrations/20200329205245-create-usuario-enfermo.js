'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UsuarioEnfermo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uf_tipo_enfermedad: {
        type: Sequelize.STRING
      },
      uf_codigo: {
        type: Sequelize.STRING
      },
      uf_nombre: {
        type: Sequelize.STRING
      },
      uf_apellido_paterno: {
        type: Sequelize.STRING
      },
      uf_apellido_materno: {
        type: Sequelize.STRING
      },
      uf_carnet_identidad: {
        type: Sequelize.NUMBER
      },
      uf_carnet_lugar_exp: {
        type: Sequelize.STRING
      },
      uf_direccion_domicilio: {
        type: Sequelize.STRING
      },
      uf_telefono_fijo: {
        type: Sequelize.NUMBER
      },
      uf_telefono_movil: {
        type: Sequelize.NUMBER
      },
      uf_telefono_emergency: {
        type: Sequelize.NUMBER
      },
      uf_status_covid: {
        type: Sequelize.STRING
      },
      uf_estado: {
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
    return queryInterface.dropTable('UsuarioEnfermo');
  }
};