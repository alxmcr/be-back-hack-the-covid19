'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RelTiene', {
      vi_viaje: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Viaje',
          key: 'vi_viaje'
        }
      },
      us_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Usuario',
          key: 'us_usuario'
        }
      }
    },
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('RelTiene');
  }
};