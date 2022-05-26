const {Router} = require('express');
const prodRouter = Router();
const {
    getProductsController, putProductController,
    postProductsController,
    deleteProductsController,
    patchProductsController} = require ('../controllers/products.controller');


prodRouter.get('/lista', getProductsController);

prodRouter.put('/actualizar/:id', putProductController);

prodRouter.delete('/eliminar/:id', deleteProductsController);

prodRouter.post('/agregar', postProductsController);

prodRouter.patch('/actualizado/:id', patchProductsController)


module.exports = prodRouter