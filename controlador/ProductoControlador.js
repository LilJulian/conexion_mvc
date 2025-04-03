import Producto from "../modelos/Producto.js";

class ProductoControlador {
    static getAllProductos = async (req, res) => {
        const OBJProducto = new Producto();
        const producto = await OBJProducto.getAll();
        res.json(producto);
    }
    static createProducto = async (req, res) => {
        try {
            const { nombre, descripcion, precio, categoria_id } = req.body;
            const OBJProducto = new Producto();
            const producto = await OBJProducto.create(nombre, descripcion, precio, categoria_id);
            res.status(201).json(producto)
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static actualizarProducto = async (req, res) => {
        try {
            const { id } = req.params
            const { nombre, descripcion, precio, categoria_id } = req.body;
            const OBJProducto = new Producto();
            const producto = await OBJProducto.updateProducto(nombre, descripcion, precio, categoria_id, id)
            res.status(201).json(producto);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static actualizarParcialProductos = async (req, res) => {
        try {
          const { id } = req.params
          const objeto = req.body;
          const OBJProducto = new Producto();
          const producto = await OBJProducto.updateProductoPatch(objeto, id)
          res.status(201).json(producto)
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
    }

    static deleteProducto = async (req, res) => {
        try {
          const {id} = req.params;
          const OBJProducto = new Producto();
          const producto = await OBJProducto.delete(id);
          res.status(201).json(producto)
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
}

export default ProductoControlador;