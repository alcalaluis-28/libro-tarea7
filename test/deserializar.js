// Simulando un resultado de la base de datos (array de libros)
const libros = [
  { id: 1, titulo: "Aprende Node.js", autor: "Juan Pérez", numpaginas: 200, categoria: "Tecnología" },
  { id: 2, titulo: "JavaScript Avanzado", autor: "Carlos Gómez", numpaginas: 350, categoria: "Desarrollo Web" },
  { id: 3, titulo: "Introducción a React", autor: "María López", numpaginas: 250, categoria: "Frontend" }
]

// Deserialización: extraer un solo libro
const [primerLibro] = libros

// Propiedades directamente
const { titulo, autor, numpaginas, categoria } = primerLibro

console.log(titulo)      // "Aprende Node.js"
console.log(autor)       // "Juan Pérez"
console.log(numpaginas)  // 200
console.log(categoria)   // "Tecnología"
