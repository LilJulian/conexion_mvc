import express from "express";
import ProductoControlador from "../controlador/ProductoControlador.js";


const ruta = express.Router();

ruta.get('/', ProductoControlador.getAllProductos);

export default ruta;