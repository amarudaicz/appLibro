const fs = require('fs');

let read = () => {
  const listado = fs.readFileSync('./data.json', 'utf-8');
  const listadoPar = JSON.parse(listado);

  console.log(listadoPar);
};

exports.read = read;
