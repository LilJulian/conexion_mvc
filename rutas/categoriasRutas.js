import express from "express";
import CategoriaControlador from "../controlador/CategoriaControllador.js";


const ruta = express.Router();

ruta.get('/', CategoriaControlador.getAllCatgeorias);

ruta.post('/', CategoriaControlador.createCategoria);
// ruta.post('/', CategoriaControlador.postCategoria);

ruta.put('/:id', (req, res) => {
  console.log(req.body);

})


export default ruta;