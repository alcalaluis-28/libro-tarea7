// Crear un libro
exports.crearLibro = async (req, res) => {
  console.log("Entrada funcion");

  // 1. Validar si el título es mayor a 10 caracteres
  if (req.body.titulo && req.body.titulo.length > 10) {
    console.log("Entramos a la Condición: Título mayor a 10 caracteres");
    return res.status(400).json({ mensaje: 'El título no puede ser mayor a 10 caracteres' }); // Salir de la función
  }

  // 2. Validar si el número de páginas es par
  if (req.body.numpaginas % 2 == 0) {
    console.log("Entramos a la Segunda Condición: Número de páginas es par");
  }

  // 3. Validar si falta algún dato
  if (!req.body.titulo || !req.body.autor || !req.body.numpaginas || !req.body.categoria) {
    console.log("Faltan completar los campos");
    return res.status(400).json({ mensaje: 'Faltan completar los campos' }); // Salir de la función si falta algún campo
  }

  // 4. Insertar el libro en la base de datos si todo está bien
  const sql = "INSERT INTO libros (titulo, autor, numpaginas, categoria) VALUES (?, ?, ?, ?)";

  try {
    const [result] = await db.query(sql, [req.body.titulo, req.body.autor, req.body.numpaginas, req.body.categoria]);

    res.status(201).json({
      id: result.insertId,
      mensaje: 'Libro registrado correctamente'
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }

  console.log("Fin funcion");
}
