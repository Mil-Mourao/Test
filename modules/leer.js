const fs = require("fs") //File System es un modulo nativo de Node
const leer = file => JSON.parse(fs.readFileSync(file)) //esto es lo mismo que lo anterior, pero más resumido*/
    //el método writeFileSync lee el contenido del archivo
    /*const contenido = fs.writeFileSync(file, 'utf8')
    return JSON.parse(contenido)*/
module.exports = leer //guardo la ejecución de la función
    