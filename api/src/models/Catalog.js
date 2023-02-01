const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('catalog', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description:{
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
};
