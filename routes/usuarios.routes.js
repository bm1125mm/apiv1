const { Router } = require('express');
const {
  getUsersController,
  putUsersController,
  deleteUsersController,
  postUsersController,
  patchUsersController,
} = require('../controllers/usuarios.controllers');

const router = Router();
router.get('/lista', getUsersController);

router.put('/actualizar', putUsersController);

router.delete('/eliminar', deleteUsersController);

router.post('/agregar', postUsersController);

router.patch('/actualizado', patchUsersController);

module.exports = router;
