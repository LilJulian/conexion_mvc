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
      const OBJCategoria = new Categoria();
      const categoria = await OBJCategoria.create(nombre, descripcion);
      res.status(201).json(categoria)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static actualizarCategoria = async (req, res) => {
    try {
      const { id } = req.params
      const { nombre, descripcion } = req.body;
      const OBJCategoria = new Categoria();
      const categoria = await OBJCategoria.update(nombre, descripcion, id)
      res.status(201).json(categoria)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static actualizarParcialCategoria = async (req, res) => {
    try {
      const { id } = req.params
      const objeto = req.body;
      const OBJCategoria = new Categoria();
      const categoria = await OBJCategoria.updatePatch(objeto, id)
      res.status(201).json(categoria)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static deleteCategoria = async (req, res) => {
    try {
      const {id} = req.params;
      const OBJCategoria = new Categoria();
      const categoria = await OBJCategoria.delete(id);
      res.status(201).json(categoria)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default CategoriaControlador;