const Sequelize = require('sequelize');
const sequelize = new Sequelize('sql10352175','sql10352175','fSGsUxT2nf',{
    dialect: 'mysql',
    host:'sql10.freemysqlhosting.net',
    define: {
        timestamps: false,
        freezeTableName: true,
    }
})

module.exports = sequelize;
