// importar modulos
const express = require("express");
const router = require("./routes/rutas");
const db = require("./database/db");

// declaracion de variables
var port = 3000;
var host = "127.0.0.1";

// Test de conexion con base de datos
try {
    db.sequelize.authenticate();
    console.log('Conexion correcta...!');
} catch (error) {
    console.error('error de conexion:', error);
}

db.sequelize.sync({ force: true });
console.log("Todos los modelos se han sincronizados...!");

// configuracion de modulos
var app = express();

// habilitar rutas
router.adicionar(app);

// middlewares

// levantar el servidor
app.listen(port, host, () => {
    console.log("El servidor: http://"+host+":"+port+" se ha iniciado correctamente. ");
});
