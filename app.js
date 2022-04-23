const express = require('express');
const app = express();
const UsersServices = require('../apiv1/services/usuarios.services');
const appRoutes = require('../apiv1/routes/usuarios.routes');

app.use('/', appRoutes);

app.put('/usuarios/actualizar', (req, resp) => {
  resp.json({
    status: 200,
    Message: 'usuario actualizado',
    result: UsersServices.putUsers(),
  });
});
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
