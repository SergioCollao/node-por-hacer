const opt = {
    descripcion: {
        alias: 'd',
        desc: 'marca completado la tarea',
        demand: true
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'marca completado la tarea'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime la agenda')
    .command('crear', 'Crea un evento en la agenda', { descripcion: { demand: true, alias: 'd' } })
    .command('actualizar', 'Actualizar algun evento', opt)
    .command('borrar', 'Borrar el evento ', { descripcion: { demand: true, alias: 'd' } })
    .help()
    .argv

module.exports = {
    argv
}