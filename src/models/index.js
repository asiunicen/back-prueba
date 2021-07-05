const Sequelize = require("sequelize");
const db = require("./../database/db");


const User = db.sequelize.define('User', {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    activo: Sequelize.BOOLEAN
});

const Categoria = db.sequelize.define('Categoria', {
    nombre: Sequelize.STRING,
    descripcion: Sequelize.TEXT,
    activo: Sequelize.BOOLEAN
});

module.exports = {
    User,
    Categoria
}