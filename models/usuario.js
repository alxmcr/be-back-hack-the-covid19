'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    us_tipo_usuario: DataTypes.STRING,
    us_codigo: DataTypes.STRING,
    us_nombre: DataTypes.STRING,
    us_apellido_paterno: DataTypes.STRING,
    us_apellido_materno: DataTypes.STRING,
    us_carnet_identidad: DataTypes.NUMBER,
    us_carnet_lugar_exp: DataTypes.STRING,
    us_direccion_domicilio: DataTypes.STRING,
    us_telefono_fijo: DataTypes.NUMBER,
    us_telefono_movil: DataTypes.NUMBER,
    us_telefono_emergency: DataTypes.NUMBER,
    us_licencia_conducir: DataTypes.STRING,
    us_categoria_licencia: DataTypes.STRING,
    us_status_covid: DataTypes.STRING,
    us_estado: DataTypes.STRING
  }, {
    tableName: "Usuario"
  });
  Usuario.associate = function(models) {
    // associations can be defined here
  };
  return Usuario;
};