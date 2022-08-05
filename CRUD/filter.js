const fs = require("fs")

function filter(title) {
    const listado = fs.readFileSync("./data.json", "utf-8")
    const listadoPar = JSON.parse(listado)

    function filtrar(elemento) {
        return elemento.title == title
    }

    let respuesta = listadoPar.filter(filtrar)
    
    console.log(respuesta);

}

exports.filter = filter;