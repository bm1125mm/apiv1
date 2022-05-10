const { Router } = require('express');
const {
  getUsersController,
  putUsersController,
  deleteUsersController,
  postUsersController,
  patchUsersController,
} = require('../controllers/usuarios.controllers');

const router = Router();
router.get('/usuarios/lista', getUsersController);

router.put('/usuarios/actualizar', putUsersController);

router.delete('/usuarios/eliminar', deleteUsersController);

router.post('/usuarios/agregar', postUsersController);

router.patch('/usuarios/actualizado', patchUsersController);

module.exports = router;
