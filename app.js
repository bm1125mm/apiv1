const express = require('express');
const app = express();
const UsersServices = require('./services/usuarios.services');
const appRoutes = require('./routes/usuarios.routes');

app.use('/', appRoutes);

app.listen(3090);
console.log('escuchando puerto 3090');

