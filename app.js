import express from "express";
import bodyParser from "body-parser";

import categoriaRutas from './rutas/categoriasRutas.js'

const ruta = express();

ruta.use(bodyParser.json());

ruta.use(express.urlencoded({ "extended": true }))
ruta.use("/categorias", categoriaRutas)


ruta.listen(3000, () => {
  console.log("Funciona bien");
});