const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('domain', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    TLD: {
      type: DataTypes.STRING,  // .com - .net - .ar
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
    registration: {
        type: DataTypes.DATE,
        allowNull: false
    },
    expiration: {
        type: DataTypes.DATE,
        allowNull: false
    }
  })
};