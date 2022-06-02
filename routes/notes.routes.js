const { Router } = require('express');
const {
  getUsersController,
  putUsersController,
  deleteUsersController,
  postUsersController,
  patchUsersController,
} = require('../controllers/usuarios.controllers');

const notesrouter = Router();
notesrouter.get('/lista', getUsersController);

notesrouter.put('/actualizar/:id', putUsersController);

notesrouter.delete('/eliminar/:id', deleteUsersController);

notesrouter.post('/agregar', postUsersController);

notesrouter.patch('/actualizado/:id', patchUsersController);

module.exports = notesrouter;
