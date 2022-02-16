const express = require('express');
const cors = require('cors');
const app = express();

// IMPORTACION RUTAS
const usuarioRoutes = require('./src/routes/usuario.routes');


// MIDDLEWARES
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use(cors());

app.use('/api', usuarioRoutes);

module.exports = app;