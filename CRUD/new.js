const fs = require("fs");

function add(title, author, genere, year, cost, price) {
  let listado = fs.readFileSync("./data.json", "utf-8");
  let listadoPar = JSON.parse(listado);
 
  generateId = () => parseInt(Math.random() * 99999); // Ojo con esto, "generateId" por más que es una función, no deja de ser una variable, nombrala con "const", "var" o "let". Y si es una función reutilizable la podés poner en un archivo aparte llamado por ej: "utils" y exportarla.
  // const generateId = () => parseInt(Math.random() * 99999) o, function generateId() { return parseInt(Math.random() * 99999 }
  
  id = generateId(); // Lo que le estás diciendo acá a javascript es reasigname la variable "id", si vos querés crear la variable "id", usá una instrucción de variable: "const", "varr" o "let"
  let libro = { title, author, genere, year, cost, price, id };

  listadoPar.push(libro);

  fs.writeFileSync("./data.json", JSON.stringify(listadoPar, null, 2));
  console.log(listadoPar);
}

exports.add = add;
