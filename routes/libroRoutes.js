console.log('Archivo libroRoutes.js cargado correctamente')
// Rutas = acceso a los recursos
// Verbos:
// GET - Obtener, PUT = Actualizar, POST = Crear, DELETE = Eliminar
const express = require('express')
const router = express.Router() // Enrutador

// Acceso = Crear, Listar, etc....
const libroController = require('../controllers/libroController')

// Definimos las rutas
router.post('/', libroController.crearLibro)  // Crear libro
router.get('/', libroController.obtenerLibro)  // Listar libros
router.get('/:id', libroController.obtenerLibroPorId)  // Obtener libro por ID
router.put('/:id', libroController.actualizarLibro)  // Actualizar libro
router.delete('/:id', libroController.eliminarLibro)  // Eliminar libro

module.exports = router
