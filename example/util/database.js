const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_example', 'root', 'password', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
