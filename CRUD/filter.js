const fs = require('fs')

function filter(p, s) {
    const listado = fs.readFileSync('./data.json', 'utf-8')
    const listadoPar = JSON.parse(listado)

    function filtrar(e) {
        if (e.title == p || e.author == p || e.genere == p || e.year == p) return e 
    }
    let respuesta = listadoPar.filter(filtrar)

    if (respuesta == false) {
        console.log('No se encontraron libros');
        return
    }
    console.log(respuesta);
}

exports.filter = filter;