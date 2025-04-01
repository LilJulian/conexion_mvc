import connection from "../utils/db.js";

class Producto{
    constructor(nombre, descripcion, precio, categoria_id){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.categoria_id = categoria_id
    }
    async getAllProductos() {
        try {
            const [rows] = await connection.query("SELECT * FROM productos");
            return rows;
        } catch (error) {
            throw new Error("Error al botener los productos");
        }
    }
}

export default Producto;