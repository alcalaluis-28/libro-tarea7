//Acceso a la BD
const db = require('../config/db')

//Metodos exportados
//req require (solicitud)
//res reponse (respuesta)

//Crear
exports.crearLibro =  async (req,res) => {
  console.log('Ejecutaste POST')
}

//Listar
exports.obtenerLibro = async (req,res) => {
 const sql = "SELECT id, titulo, autor,numpaginas,categoria FROM libros"

  try{
    //Desearializacion -PRIMER VALOR DE ARREGLO
    const [libros] =await db.query(sql)
    res.status(200).json(libros)
  }catch(e){
    console.error(e)
    res.status(500).json({mensaje: 'Error interno del servidor'})
  }
}
//Buscar por ID

//Actualizar

//Eliminar