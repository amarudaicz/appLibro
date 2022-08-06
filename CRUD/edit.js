const fs = require('fs');

function edit(id, title, author, genere, year, cost, price) {
  const listado = fs.readFileSync('./data.json', 'utf-8');
  const listadoPar = JSON.parse(listado);

  listadoPar.forEach((element) => {
    if (id == element.id) {
      element.title = title;
      element.author = author;
      element.genere = genere;
      element.year = year;
      element.cost = cost;
      element.price = price;
    }
  });

  fs.writeFileSync('./data.json', JSON.stringify(listadoPar, null, 2));
  console.log(listadoPar);
}

exports.edit = edit;
