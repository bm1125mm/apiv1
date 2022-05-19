const {response} = require('express');
const res = require('express/lib/response');
const productsServices = require('../services/products.services')

const getProductsController = async (req, resp = response)=>{
    const listProducts = await productsServices.getProducts();
    return resp.status(200).json({
        status: 200,
        message: 'lista de productos cargada correctamente',
        users: listProducts
    });
};

const putProductController = async (req, resp = response) =>{
    const {nameProducts, descriptionProducts, serialProducts} = req.body
    const {id} = req.params
    console.log(id);
    try{
const putController = await productsServices.putProducts(id, nameProducts, descriptionProducts, serialProducts);
return resp.status(200).json({
    status: 200,
    message: 'producto actualizado correctamente',
    putController})        
    }catch(error){
        console.log('error', error)
    }
}

const deleteProductsController = async (req, resp = response) =>{
    const {id} = req.params
    console.log(id);
    try{
    const deleteProducts = await productsServices.deleteProducts(id);
    return resp.status(200).json({
    deleteProducts,
    status: 204,
    message: 'Producto eliminado correctamente'    
    });
}catch(error){
    console.log('error', error)
}
}

const postProductsController = async (req, resp = response)=>{
const {nameProducts, descriptionProducts, serialProducts} = req.body;
try{
    const postProducts = await productsServices.postProducts(nameProducts, descriptionProducts, serialProducts);
    console.log(postProducts);
    return resp.status(201).json({
    status: 201,
    message: 'Producto creado satisfactoriamente',
    });
}   catch(error){
    console.log('error', error)
}
}

const patchProductsController = async (req, resp = response) =>{
    const {nameProducts, descriptionProducts, serialProducts} = req.body;
    const {id} = req.params
    console.log(id);
    try{
    const patchProducts = await productsServices.patchProducts (id, nameProducts, descriptionProducts, serialProducts);
    return resp.status (200).json({
        status: 200,
        message: 'Producto actualizado',
        patchProducts
    })
    }catch(error){
        console.log('error', error)
    }
}

module.exports = {
    getProductsController,
    putProductController,
    deleteProductsController,
    postProductsController,
    patchProductsController
}