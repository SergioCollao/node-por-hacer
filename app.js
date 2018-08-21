const argv = require('./config/yargs').argv;
const porHacer = require('./por_hacer/por-hacer');
const colors = require('colors');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'actualizar':
        porHacer.actualizar(argv.descripcion, argv.completado);

        break;
    case 'listar':
        console.log(porHacer.listarEventos());
        console.log('========================================'.green);
        break;
    case 'borrar':
        console.log(`${porHacer.borrar(argv.descripcion)}`);
        break;

    default:
        console.log('Comando no aceptado');
        break;
}