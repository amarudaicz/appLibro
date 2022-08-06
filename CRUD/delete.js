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
  console.log(listadoPar);
}

exports.deletear = deletear;
