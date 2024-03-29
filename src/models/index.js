const { Sequelize } = require('sequelize')
const { makeFood } = require('./user.model')

const DATABASE_URL =
    process.env.NODE_ENV === 'test'
        ? 'sqlite::memory:'
        : process.env.DATABASE_URL

const CONNECTION_OPTIONS =
    process.env.NODE_ENV === 'test'
        ? {}
        : {
              ssl: {
                  require: true,
                  rejectUnauthorized: false,
              },
          }

const sequelize = new Sequelize(DATABASE_URL, CONNECTION_OPTIONS)

const Food = makeFood(sequelize)

module.exports = {
    sequelize,
    Food,
}