const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('cloudServer', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
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
    processing: {
        type: DataTypes.INTEGER, // CPU
        allowNull: false
    },
    memoryRAM: {
        type: DataTypes.INTEGER, // GB
        allowNull: false
    },
    storageSSD: {
        type: DataTypes.INTEGER, // GB
        allowNull: false
    },
    transfer: {
        type: DataTypes.INTEGER, // TB
        allowNull: false
    }
  })
};