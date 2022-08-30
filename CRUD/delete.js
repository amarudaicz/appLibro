const fs = require('fs');

function deletear(id) {
  const listado = fs.readFileSync('./data.json', 'utf-8');
  const listadoPar = JSON.parse(listado);

  function encontrar(element, index) {
    if (element.id === id) {
      listadoPar.splice(index, 1);

      fs.writeFileSync('./data.json', JSON.stringify(listadoPar, null, 2));
    }
  }
  listadoPar.forEach(encontrar);
  console.log(listadoPar); // Es preferible que acá hagas return y luego hagas console.log() del valor de esta función en app.js, si te animás mejorá eso.
}

exports.deletear = deletear;
