const db = require('./index');

module.exports = db.sequelize.define('user', {
    name: db.Sequelize.STRING,
    email: db.Sequelize.STRING
  },{underscored: true});
