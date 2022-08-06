const fs = require("fs");

function add(title, author, genere, year, cost, price) {
    
    let listado = fs.readFileSync("./data.json", "utf-8");
    let listadoPar = JSON.parse(listado);
    generateId = () => parseInt(Math.random() * 99999) ;
    id = generateId()
    let libro = {title, author, genere, year, cost, price, id};
    
    listadoPar.push(libro);
    
    fs.writeFileSync("./data.json", JSON.stringify(listadoPar, null, 2));
    console.log(listadoPar);
}


exports.add = add;
