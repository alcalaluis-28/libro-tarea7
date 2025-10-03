//RUTAS = acceso a los recursos
// Verbos:
//Get -Obtener,PUT =actualizar ,POST =crearProducto,DELETE=eliminar
const express = require('express')
const router =express.Router()
const libroController = require('../controllers/libroController')

router.post('/',libroController.crearLibro)
router.get('/',libroController.obtenerLibro)
module.exports = router

