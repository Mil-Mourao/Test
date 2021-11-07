const escribir = require("./escribir")
const crear = (info, lista,file) => {
    const element = {
        titulo: info,
        identificador: lista.length > 0 ? lista[lista.length - 1].identificador + 1: 1, //busco el ultimo id del array (por eso el -1) y cuando lo agrego le pongo el +1
        completa: false //va false porque por qué agregaría una tarea completa a una lista de tareas?
    }
    lista.push(element)
    escribir(file, lista)
    return element
};

module.exports = crear;
