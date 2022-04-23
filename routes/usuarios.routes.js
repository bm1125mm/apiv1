const { Router } = require('express');
const { getUsersController } = require('../controllers/usuarios.controllers');

const router = Router();

router.get('/usuarios/lista', getUsersController);

module.exports = router;
