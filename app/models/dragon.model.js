const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config')

const Dragon = sequelize.define('dragon', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'dragon',
    underscored: true
  }
);

module.exports = Dragon
