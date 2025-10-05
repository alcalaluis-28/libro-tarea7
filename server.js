console.log('Archivo server.js ejecutándose...');

const express = require('express')
const libroRoutes =require('./routes/libroRoutes.js')
console.log('Archivo libroRoutes.js importado desde server.js');

const app =express()
const PORT = process.env.PORT || 3000 //Puerto de la App

//Comunicacion se realizara JSON
app.use(express.json())
console.log('✅ Server cargando...')

//Rutas
app.use('/api/libros', (req, res, next) => {
  console.log('📡 Entrando a /api/libros')
  next()
}, libroRoutes)

// Ruta de prueba para ver si Express responde
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente')
})

//Iniciar el servidor
app.listen(PORT,() => {
  console.log(`Servidor iniciado http://localhost:${PORT}`)
})