const express = require('express')
const productRoutes = require('./routes/product')
const path = require('path')
// permitir que el back sea consumido por fuentes externas
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false })) // entiende dato de form html
app.use(express.json()) // entiende formato json
app.use('/v1', productRoutes)

// servir archivos staticos en express
app.use('/public', express.static(path.join(__dirname, 'storage', 'imgs')))

module.exports = app