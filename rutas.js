const express = require('express') //modulo express
const rutas = express.Router()
const pool = require('./config') //conexion a la base de datos

//Metodo GET - Trae todos los registros
rutas.get('/usuario', (req, res) => {
    pool.query('SELECT * FROM usuario', (err, result) => {
        if(err){
            console.error(err)
        }else{
            res.json(result)
        } 
    })
})

//Metodo GET - Trae un registro por busqueda por la ID
rutas.get('/usuario/:id', (req, res) => {
    let id = req.params.id
    
    pool.query('SELECT * FROM usuario WHERE id = ?', id, (err, result) => {
        if(err){
            console.error(err)
        }else if(Object.keys(result).length === 0){
            res.send('El usuario no existe')
        }else{
            res.send(result)
        }
    })
})

//Metodo POST
rutas.post('/usuario', (req, res) => {

    const { nombre, email, telefono } = req.body
    const persona = {
        nombre,
        email,
        telefono
    }

    pool.query('INSERT INTO usuario SET ?', [persona], (err, result) => {
        if(err){
            console.error(err)
        }else{
            res.send('Usuario Registrado')
        }
    })
})

//Metodo PUT
rutas.put('/usuario/:id', (req, res) => {
    let id = req.params.id
    const { nombre, email, telefono } = req.body
    const persona = {
        nombre,
        email,
        telefono
    }

    pool.query('UPDATE usuario SET ? WHERE id = ?', [persona, id], (err, result) => {
        if(err){
            console.error(err)
        }else{
            res.send('Usuario Actualizado')
        }
    })
})

//Metodo DELETE
rutas.delete('/usuario/:id', (req, res) => {
    let id = req.params.id

    pool.query('DELETE FROM usuario WHERE id = ?', id, (err, result) => {
        if(err){
            console.error(err)
        }else{
            res.send('Usuario Eliminado')
        }
    })
})


module.exports = rutas //exportar rutas