import Producto from "../modelos/Producto.js";

class ProductoControlador {
    static getAllProductos = async (req, res) => {
        const OBJProducto = new Producto();
        const producto = await OBJProducto.getAllProductos();
        res.json(producto);
    }
}

export default ProductoControlador;