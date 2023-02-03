const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('housing', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    floorSpace: {
      type: DataTypes.FLOAT, // m^2
      allowNull: false,
    },
    rackUnits: {
        type: DataTypes.INTEGER, // U
        allowNull: false
    },
    consumption: {
        type: DataTypes.INTEGER, // A
        allowNull: false
    }
  })
};