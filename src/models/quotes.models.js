

const { DataTypes } = require('sequelize');

const db = require('../utils/database')

const Quotes = db.define('quotes', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  quote: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    defaultValue: 'Anonymous'
  },
  year: {
    type: DataTypes.INTEGER,
  }
}, {
  timestamps: false //? No agrega las columnas creare_at y update_at
})

module.exports = Quotes;