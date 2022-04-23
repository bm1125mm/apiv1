const { Router } = require('express');
const { getUsersController, putUsersController } = require('../controllers/usuarios.controllers');

const router = Router();

router.get('/usuarios/lista', getUsersController);

router.put('/usuarios/actualizar', putUsersController);

module.exports = router;
