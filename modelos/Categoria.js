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
      const [rows] = await connection.query("SELECT * FROM categorias");
      return rows;
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
    this.metodo(objeto, id)
    const [rows] = await connection.query("SELECT * FROM categorias where id = ?", [id]);
    // if (result.affectedRows === 0) {
    //   throw new Error("Categoria no encontrada");
    // }
    return rows[0];
  }
  // noRepetir = async (consulta, customError) => {
  //   try {
  //     const [rows] = await connection.query(consulta)
  //     return rows;
  //   } catch (error) {
  //     throw new Error(customError)
  //   }
  // }
  metodo = async (objeto, id) => {
    try {
      for (const key in objeto) {
        // console.log(objeto[key]);
        await connection.query(`update categorias set ${key} = '${objeto[key]}' where id = ${id}`);
      }
    } catch (error) {
      throw new Error("Error al actualizar la categoria");
    }
  }
}

export default Categoria;