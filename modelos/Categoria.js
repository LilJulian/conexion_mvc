import connection from "../utils/db.js";


/**
 * Clase categoria con nombre, descripcion y metodo para obtener (propiedades)
 */
class Categoria {
  // constructor(nombre, descripcion) {

  //   this.nombre = nombre;
  //   this.descripcion = descripcion;
  // }
  /**
   * Metodo para obtener los registros de la base de datos
   * @returns {Array} Listado de la categorias en un arreglo
   */
  async getAll() {
    try {
      const [result] = await connection.query("SELECT * FROM categorias");
      return result;
    } catch (error) {
      throw new Error("Error al obtener las categorias")
    }
  }
  async create(nombre, descripcion) {
    try {
      const [result] = await connection.query(`insert into categorias(nombre, descripcion) values 
      (?,?)`, [nombre, descripcion])
      return {
        id: result.id, nombre, descripcion
      }
    } catch (error) {
      throw new Error("Error al insertar categoria ");
    }
  }
  async update(nombre, descripcion, id) {
    try {
      const [result] = await connection.query(`update categorias set nombre = ?, descripcion = ? where id = ?`, [nombre, descripcion, id]);
      if (result.affectedRows === 0) {
        throw new Error("Categoria no encontrada");
      }
      return {
        id: result.id, nombre, descripcion
      }
    } catch (error) {
      throw new Error("Error al actualizar la categoria");
    }
  }
  async updatePatch(objeto, id) {
    try {
      const claves = Object.keys(objeto);
      const recClaves = claves.map(clave => `${clave} = ?`).join(", ");
      const valores = claves.map(clave => objeto[clave]);
      await connection.query(`update categorias set ${recClaves} where id = ?`, [...valores, id]);
      const [rows] = await connection.query("select * from categorias where id = ?", [id]);
      return rows;

    } catch (error) {
      throw new Error("Error al actualizar la categoria");
    }
  }
  async delete(id){
    try {
      const [result] = await connection.query(`delete from categorias where id = ?`, [id]);
      return result;
    } catch (error) {
      throw new Error("Error al eliminar categoria")
    }
  }
}

export default Categoria;