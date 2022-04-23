const express = require('express');
const app = express();
const UsersServices = require('./services/usuarios.services');
const appRoutes = require('./routes/usuarios.routes');

app.use('/', appRoutes);

app.delete('/usuarios/eliminar', (req, resp) => {
  resp.json({
    status: 200,
    Message: 'usuario eliminado',
    result: UsersServices.deleteUsers(),
  });
});
app.post('/usuarios/agregar', (req, resp) => {
  resp.json({
    status: 200,
    Message: 'usuario agregado',
    result: UsersServices.postUsers(),
  });
});
app.patch('/usuarios/actualizado', (req, resp) => {
  resp.json({
    status: 200,
    Message: 'usuario agregado',
    result: UsersServices.patchUsers(),
  });
});

app.listen(3090);
console.log('escuchando puerto 3090');
