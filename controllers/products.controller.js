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



module.exports = {
    getProductsController,
    postProductsController
}