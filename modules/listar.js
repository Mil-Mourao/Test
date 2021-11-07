/*const listar = lista => {
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        console.log("--------------------")
        console.log('Título', element.titulo)
        console.log('Identificador', element.identificador)
        console.log('Completa', element.completa)
    }
}*/

const listar = lista => lista.forEach(item => {
    const {titulo, identificador, completa} = item;
        console.log("--------------------")
        console.log('Título', titulo)
        console.log('Identificador', identificador)
        console.log('Completa', completa)
})
module.exports = listar