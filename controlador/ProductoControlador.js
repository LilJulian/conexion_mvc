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
            const OBJProducto = new Producto(nombre, descripcion, precio, categoria_id );
            const producto = await OBJProducto.create();
            res.status(201).json(producto)
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default ProductoControlador;