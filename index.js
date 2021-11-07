const leer = require("./modules/leer"); //llamo al módulo leer
const listar = require("./modules/listar");
const escribir = require("./modules/escribir");
const process = require("process");
const { argv } = process; //destructuring de un objeto, lo torna en un array
const [node, file, action, identificador] = argv; //destructuring un array
const crear = require("./modules/crear")
let tareas = leer("./data/tareas.json"); //guardo la lectura del archivo .json en una variable
let resultado = null
//
/*console.log(action)*/
switch (action) {
  case "-l":
    tareas = leer("./data/tareas.json"); //no hay que volver a usar la palabra "let"
    listar(tareas);
    break;
  case "-c":
    tareas = leer("./data/tareas.json"); //no hay que volver a usar la palabra "let"
    listar(tareas.filter((tarea) => tarea.completa));
    break;
  case "-i":
    tareas = leer("./data/tareas.json"); //no hay que volver a usar la palabra "let"
    listar(tareas.filter((tarea) => !tarea.completa));
    break;
  case "-s":
    tareas = leer("./data/tareas.json"); //no hay que volver a usar la palabra "let"
    resultado = tareas.find(tarea => tarea.identificador === parseInt(identificador))
    console.log(resultado ? resultado : "No se encontró ningún resultado.");
    break;
    case "-a":
    tareas = leer("./data/tareas.json"); //no hay que volver a usar la palabra "let"
    resultado = crear(identificador,tareas,"./data/tareas.json")
    console.log(resultado)
    break;
  default:
    console.log("No se reconoció la acción.");
}
