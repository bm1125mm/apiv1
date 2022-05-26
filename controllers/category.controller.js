const { response } = require('express');
const CategoryServices = require('../services/category.services')

const getCategoryController = async (req, resp)=>{
    const listCategory = await CategoryServices.getCategory();
    return resp.status(200).json({
        status: 200,
        message: 'lista de categorias cargada correctamente',
        users: listCategory
    })
}

const putCategoryController = async (req, resp)=>{
    const {name} = req.body
    const{id} = req.params
    console.log (id);
    try{
        const putCategory = CategoryServices.putCategory(id, name);
        return resp.status(200).json({
        status: 200,
        message: 'Categoria actualizada correctamente',
        putCategory});
    }catch(error){
        console.log('error', error)
    }
}

const deleteCategoryController = async (req, resp)=>{
    const {id} = req.params;
    console.log(id);
    try{
        const deleteCategory = await CategoryServices.deleteCategory(id);
        return resp.status(200).json({
        deleteCategory,
        status: 204,
        message: 'Categoria eliminada correctamente'  
        })
    }catch(error){
        console.log('error', error)
    }
}
const postCategoryController = async(req, resp)=>{
    const {name} = req.body
try{
    const postCategory = await CategoryServices.postCategory(name);
    return resp.status(201).json({
        status: 201,
        message:'Categoria creada',
        postCategory
    })
  }catch(error){
    console.log(error)
    }
}

const patchCategoryController = async (req, resp) =>{
    const {name} = req.body;
    const {id} = req.params;
    console.log(id);
    try{
    const patchCategory = CategoryServices.patchCategory (id, name);
    return resp.status(200).json({
        status: 200,
        message: 'Producto actualizado',
        patchCategory
    })
    }catch(error){
        console.log('error', error)
    }
    

}


module.exports = {getCategoryController, putCategoryController, deleteCategoryController, postCategoryController, patchCategoryController}
