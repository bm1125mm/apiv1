const { Router } = require("express");
const {getCategoryController, putCategoryController, deleteCategoryController, postCategoryController, patchCategoryController} = require('../controllers/category.controller')

const categoryRoutes = Router();

categoryRoutes.get('/lista', getCategoryController);
categoryRoutes.put('/actualizar/:id', putCategoryController);
categoryRoutes.delete('/eliminar/:id', deleteCategoryController);
categoryRoutes.post('/agregar', postCategoryController);
categoryRoutes.patch('/actualizado/:id', patchCategoryController)


module.exports = categoryRoutes


