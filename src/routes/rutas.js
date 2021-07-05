//importando en las rutas al controlador
const inicioControllers = require("./../controllers/inicioController");

function adicionar(app){
    //importando el inicioController y la funcion inicio
    app.get("/", inicioControllers.inicio);

    //ruta para saludar
    app.get("/saludo", inicioControllers.saludar);
}



module.exports = {
    adicionar
}