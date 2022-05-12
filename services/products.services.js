const productsModel = require ('../models/products.models')

const getProducts = async () =>{
    const listProducts = await productsModel.find();
    return listProducts
};


const postProducts = async (nameProducts, descriptionProducts, serialProducts )=>{
    try{
        const products = new productsModel({nameProducts, descriptionProducts, serialProducts});
        await products.save();
        return 'producto guardado desde el servicio';
    }   catch (error){
        return error;
    }
}


module.exports = {getProducts, postProducts}