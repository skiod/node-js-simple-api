var Sequelize = require('sequelize');
var sequelize = new Sequelize('fake_api', 'root', '',
{
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    logging: false
  });

let db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize
module.exports = db;