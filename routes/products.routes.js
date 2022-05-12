const {Router} = require('express');
const prodRouter = Router();
const {
    getProductsController, 
    postProductsController} = require ('../controllers/products.controller')

prodRouter.get('/lista', getProductsController);
prodRouter.post('/agregar', postProductsController)



module.exports = prodRouter