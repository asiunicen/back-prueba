// importar modulos
const express = require("express");
const router = require("./routes/rutas");

// declaracion de variables
var port = 3000;
var host = "127.0.0.1";

// configuracion de modulos
var app = express();

// habilitar rutas
router.adicionar(app);

// middlewares

// levantar el servidor
app.listen(port, host, () => {
    console.log("El servidor: http://"+host+":"+port+" se ha iniciado correctamente. ");
});
