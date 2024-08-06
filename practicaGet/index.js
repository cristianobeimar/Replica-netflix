const express = require("express");
const app = express();
const puerto = 3000;

const productos = [
  {
    id: 1,
    nombre: "puma",
    categoria: "calzado",
    descripcion: "producto elaborado con materiales altamente resitentes",
    precio: "500000",
  },

  {
    id: 2,
    nombre: "puma",
    categoria: "calzado",
    descripcion: "producto de gran caliad",
    precio: "400000",
  },

  {
    id: 3,
    nombre: "puma",
    categoria: "calzado",
    descripcion: "producto con garantia y calidad garantizada",
    precio: "60000",
  },

  {
    id: 4,
    nombre: "puma",
    categoria: "calzado",
    descripcion: "producto con calidad garantizada",
    precio: "300000",
  },
];

const clientes = [
  {
    id: 1,
    nombre: "jose",
    direccion: "popayan",
  },

  { id: 1, 
    nombre: "jose", 
    direccion: "popayan" },

  { id: 1, 
    nombre: "jose", 
    direccion: "popayan" },

  { id: 1, 
    nombre: "jose", 
    direccion: "popayan" },
];



app.listen(puerto, () => {
  console.log(`servidor escuchando en http://localhost:${puerto}`);
});

app.get("/productos", (req, res) => {
  res.json(productos);
});

app.get("/clientes", (req, res) => {
    res.json(clientes);
  });
