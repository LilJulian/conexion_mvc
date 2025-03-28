import Categoria from "../modelos/Categoria.js";


class CategoriaControlador {
  static getAllCatgeorias = async (req, res) => {
    const OBJCategoria = new Categoria();
    const categoria = await OBJCategoria.getAll();
    res.json(categoria);
  }
  static createCategoria = async (req, res) => {
    try {
      const { nombre, descripcion } = req.body;
      const OBJCategoria = new Categoria(nombre, descripcion);
      const categoria = await OBJCategoria.create();
      res.status(201).json(categoria)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default CategoriaControlador;