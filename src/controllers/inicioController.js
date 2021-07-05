
const inicio = (req, res) => {
    res.send("Hola Mundo");
}

const saludar = (req, res) => {
    res.send("Hola mundo desde el controlador");
}

module.exports = {
    inicio,
    saludar
}