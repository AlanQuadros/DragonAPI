const { Sequelize } = require('sequelize')

// const sequelize = new Sequelize('dragonDB', 'root', '12345678' ,{ host: 'localhost' , dialect: 'mysql'})
const sequelize = new Sequelize('bqHRtKZmBj', 'bqHRtKZmBj', '1s5b42inHY' ,{ host: 'remotemysql.com' , dialect: 'mysql'})

async function testConnection() { try {
  await sequelize.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}
}

testConnection()

module.exports = sequelize
