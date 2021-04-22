const express = require('express') //requerir el modulo express
const app = express() //crear servidor
const rutas = require('./rutas') //importar rutas

app.use(express.json()) //analiza las solicitudes entrantes json
app.set('puerto', '3000') //crear una variable llamada puerto con el valor 3000

//usar rutas
app.use(rutas)

//Servidor
app.listen(app.get('puerto'), (req, res) => {
    console.log("Server en el puerto",app.get('puerto'))
})