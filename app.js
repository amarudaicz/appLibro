const read = require('./CRUD/read');
const edit = require('./CRUD/edit');
const add = require('./CRUD/new');
const deletear = require('./CRUD/delete');
const filter = require('./CRUD/filter');

// Acá cada método es un objeto único, lo cual está mal porque es un mal uso del objeto. 
// para no hacer "add.add", podés hacer: "metodos.add", y te quedaria para los demás: "metodo.read", "metodo.edit", etc..

switch (process.argv[2]) {
  case 'new':
    add.add(
      process.argv[3],
      process.argv[4],
      process.argv[5],
      parseInt(process.argv[6]),
      parseInt(process.argv[7]),
      parseInt(process.argv[8])
    );
    break;

  case 'read':
    read.read();
    break;

  case 'edit':
    edit.edit(
      parseInt(process.argv[3]),
      process.argv[4],
      process.argv[5],
      process.argv[6],
      parseInt(process.argv[7]),
      parseInt(process.argv[8]),
      parseInt(process.argv[9])
    );
    break;

  case 'delete':
    deletear.deletear(parseInt(process.argv[3]));
    break;

  case 'filter':
    filter.filter(process.argv[3]);
    break;

  default:
    break;
}
