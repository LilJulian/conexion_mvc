import connection from "../utils/db.js";

class Producto{
    // constructor(nombre, descripcion, precio, categoria_id){
    //     this.nombre = nombre;
    //     this.descripcion = descripcion;
    //     this.precio = precio;
    //     this.categoria_id = categoria_id
    // }
    async getAll() {
        try {
            const [result] = await connection.query("SELECT * FROM productos");
            return result;
        } catch (error) {
            throw new Error("Error al botener los productos");
        }
    }
    async create(nombre, descripcion, precio, categoria_id){
        try {
            const [result] = await connection.query(`insert into productos(nombre, descripcion, precio, categoria_id) values 
            (?, ?, ?, ?)`, [nombre, descripcion, precio, categoria_id])
            return {
                id: result.insertId, nombre, descripcion, precio, categoria_id
            }
        } catch (error) {
            throw new Error("Error al insertar producto ");
        }        
    }
    async updateProducto(nombre, descripcion, precio, categoria_id, id){
        try {
            const [result] = await connection.query(`update productos set nombre = ?, descripcion = ?, precio = ?, categoria_id = ? where id = ?`, [nombre, descripcion, precio, categoria_id, id]);
            if (result.affectedRows === 0) {
                throw new Error("producto no encontrado");
            }
            return {
                id: result.id, nombre, descripcion, precio, categoria_id
              }
        } catch (error) {
            throw new Error("Error al actualizar el producto");
        }
    }
    async updateProductoPatch(objeto, id){
        try {
          const claves = Object.keys(objeto);
          const recClaves = claves.map(clave => `${clave} = ?`).join(", ");
          const valores = claves.map(clave => objeto[clave]);
          await connection.query(`update productos set ${recClaves} where id = ?`, [...valores, id]);
          const [rows] = await connection.query("select * from productos where id = ?", [id]);
          return rows;      
        } catch (error) {
          throw new Error("Error al actualizar el producto");
        }
    }
    async delete(id){
        try {
          const [result] = await connection.query(`delete from productos where id = ?`, [id]);
          return result;
        } catch (error) {
          throw new Error("Error al eliminar producto")
        }
      }
}

export default Producto;