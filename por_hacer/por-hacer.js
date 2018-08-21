const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const guardaDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);

    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardaDB();

    return porHacer;
}

const listarEventos = () => {
    cargarDB();
    console.log('============== Listado de tareas =============='.green);
    let salida = '';
    for (let i = 0; i < listadoPorHacer.length; i++) {
        const element = listadoPorHacer[i];
        salida += `Tarea ${i} : ${element.descripcion}.\nEstado : ${element.completado}\n`;
    }
    return salida;
}

const actualizar = (descripcion, completado) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    console.log(descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardaDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    // let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    // console.log(descripcion);
    // if (index >= 0) {
    //     listadoPorHacer.splice(index, 1);
    //     guardaDB();
    //     return true;
    // } else {
    //     return false;
    // }
    let arrayFiltrado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });
    if (arrayFiltrado.length === listadoPorHacer.length) {
        return "Evento no encontrado, no se elimino ningun mensaje";
    } else {
        listadoPorHacer = arrayFiltrado;
        guardaDB();
        return "El evento se elimino correctamente";
    };


}

module.exports = {
    crear,
    listarEventos,
    actualizar,
    borrar
}