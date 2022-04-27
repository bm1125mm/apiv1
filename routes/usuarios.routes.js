const { Router } = require('express');
const { getUsersController, putUsersController, deleteUsersController, postUsersController, patchUsersController } = require('../controllers/usuarios.controllers');

const router = Router();
//http://localhost:3090/usuarios/lista/3
router.get('/usuarios/lista/:id', getUsersController);

router.put('/usuarios/actualizar', putUsersController);

router.delete('/usuarios/eliminar', deleteUsersController);

router.post('/usuarios/agregar', postUsersController);

router.patch('/usuarios/actualizado', patchUsersController);


module.exports = router;
