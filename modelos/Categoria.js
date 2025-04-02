import connection from "../utils/db.js";


/**
 * Clase categoria con nombre, descripcion y metodo para obtener (propiedades)
 */
class Categoria {
  constructor(nombre, descripcion) {
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
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
  async create() {
    try {
      const [result] = await connection.query(`insert into categorias(nombre, descripcion) values 
      (?,?)`, [this.nombre, this.descripcion])
      return {
        id: result.id,
        nombre: this.nombre,
        descricion: this.descripcion
      }
    } catch (error) {
      throw new Error("Error al insertar categoria ");
    }

  }
  // noRepetir = async (consulta, customError) => {
  //   try {
  //     const [rows] = await connection.query(consulta)
  //     return rows;
  //   } catch (error) {
  //     throw new Error(customError)
  //   }
  // }
}

export default Categoria;