const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('dedicatedServer', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    brand: {
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
    operatingSystem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    processor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    memoryRAM: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    storage: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
  })
};