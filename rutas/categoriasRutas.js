import express from "express";
import CategoriaControlador from "../controlador/CategoriaControllador.js";
import { validarCategoria } from "../middlewares/validarCategoria.js";


const ruta = express.Router();

ruta.get('/', CategoriaControlador.getAllCatgeorias);

ruta.post('/', validarCategoria, CategoriaControlador.createCategoria);
// ruta.post('/', CategoriaControlador.postCategoria);

ruta.put('/:id', CategoriaControlador.actualizarCategoria)

ruta.patch('/:id', CategoriaControlador.actualizarParcialCategoria)



export default ruta;