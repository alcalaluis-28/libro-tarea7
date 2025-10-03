const express = require('express')
const libroRoutes =require('./routes/libroRoutes')

const app =express()
const PORT = process.env.PORT || 3000 //Puerto de la App

//Comunicacion se realizara JSON
app.use(express.json())

//Rutas
app.use('/api/libro',libroRoutes)

//iNICIAR EL SERVIDOR
app.listen(PORT,() => {
  console.log(`Servidor iniciado http://localhost:${PORT}`)
})