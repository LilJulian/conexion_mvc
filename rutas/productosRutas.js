import express from "express";
import ProductoControlador from "../controlador/ProductoControlador.js";


const ruta = express.Router();

ruta.get('/', ProductoControlador.getAllProductos);

ruta.post('/', ProductoControlador.createProducto)

// ruta.post('/:id', (req, res) =>{
//     console.log(req.body);
    
// })

export default ruta;