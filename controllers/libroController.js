//Acceso a la BD
const db = require('../config/db')

//Métodos exportados
//req => solicitud
//res => respuesta

//Crear
exports.crearLibro = async (req, res) => {
  //1. Recibir los datos
  const {titulo, autor, numpaginas, categoria} = req.body
  
  //2. Validación Backend
  if (!titulo || !autor || numpaginas == undefined || !categoria){
    return res.status(400).json({mensaje: 'Faltan completar los campos'})
  }

  //3. Estructurar las consultas
  const sql = "INSERT INTO libros (titulo, autor, numpaginas, categoria) VALUES (?,?,?,?)"
  
  //4. Transacción
  try {
    //5. Ejecutamos la consulta
    const [result] = await db.query(sql, [titulo, autor, numpaginas, categoria])

    //6. Entregar un resultado (PK)
    res.status(201).json({
      id: result.insertId,
      mensaje: 'Libro Registrado Correctamente'
    })
  } catch (e) {
    console.error(e)
    res.status(500).json({mensaje: 'Error interno del servidor'})
  }
}

//Listar
exports.obtenerLibro = async (req, res) => {
  const sql = "SELECT id, titulo, autor, numpaginas, categoria FROM libros"
  
  try {
    //Deserialización - con los corchetes [] obtenemos el PRIMER VALOR DEL ARREGLO
    console.log('Ejecutando consulta SQL:', sql)
    const [libros] = await db.query(sql)
    console.log('Resultado obtenido:', libros)
    //Enviamos los resultados
    res.status(200).json(libros)
  } catch (e) {
    console.log('Error en obtenerLibro:')
    console.error(e)
    res.status(500).json({mensaje: 'Error interno del servidor'})
  }
}

//Buscar por ID
exports.obtenerLibroPorId = async (req, res) => {
  const {id} = req.params
  const sql = "SELECT id, titulo, autor, numpaginas, categoria FROM libros WHERE id = ?"
  
  try {
    const [libros] = await db.query(sql, [id])

    if (libros.length === 0) {
      return res.status(404).json({mensaje: 'No encontramos el libro con ese ID'})
    }
    
    res.status(200).json(libros[0]) // Enviamos el primer libro encontrado
  } catch (e) {
    console.error(e)
    res.status(500).json({mensaje: 'Error interno del servidor'})
  }
}

//Actualizar
exports.actualizarLibro = async (req, res) => {
  const {id} = req.params
  const {titulo, autor, numpaginas, categoria} = req.body
  
  if (!titulo && !autor && numpaginas == undefined && !categoria) {
    return res.status(400).json({mensaje: 'Faltan completar los campos'})
  }

  let sqlParts = []
  let values = []

  if (titulo) {
    sqlParts.push('titulo = ?')
    values.push(titulo)
  }
  if (autor) {
    sqlParts.push('autor = ?')
    values.push(autor)
  }
  if (numpaginas != undefined) {
    sqlParts.push('numpaginas = ?')
    values.push(numpaginas)
  }
  if (categoria) {
    sqlParts.push('categoria = ?')
    values.push(categoria)
  }

  if (sqlParts.length === 0) {
    return res.status(400).json({mensaje: 'No hay datos para actualizar'})
  }

  const sql = `UPDATE libros SET ${sqlParts.join(', ')} WHERE id = ?`
  values.push(id)

  try {
    const [result] = await db.query(sql, values)

    if (result.affectedRows === 0) {
      return res.status(404).json({mensaje: 'No encontramos el libro con el ID'})
    }

    res.status(200).json({mensaje: 'Libro actualizado correctamente'})
  } catch (e) {
    console.error(e)
    res.status(500).json({mensaje: 'Error interno del servidor'})
  }
}

//Eliminar
exports.eliminarLibro = async (req, res) => {
  const {id} = req.params
  const sql = "DELETE FROM libros WHERE id = ?"

  try {
    const [result] = await db.query(sql, [id])

    if (result.affectedRows === 0) {
      return res.status(400).json({mensaje: 'No encontramos el libro a eliminar'})
    }

    res.status(200).json({mensaje: 'Libro eliminado correctamente'})
  } catch (e) {
    console.error(e)
    res.status(500).json({mensaje: 'Error interno del servidor'})
  }
}
