const productsModel = require ('../models/products.models')

const getProducts = async () =>{
    try{
        const listProducts = await productsModel.find();
        return listProducts;
    }catch(error){
        return error
    }    
};

const putProducts = async (id, nameProducts, descriptionProducts, serialProducts) => {
    try{
    const productUpdate = await productsModel.findByIdAndUpdate (id, {nameProducts, descriptionProducts, serialProducts}, {new: true})
    return productUpdate;
    }catch(error){
        return error
    }
}

const deleteProducts = async (id) =>{
    try{
    const productsToDelete = await productsModel.findById(id);
    console.log(productsToDelete);
    const deleteProducts = await productsModel.findByIdAndDelete(id,);
    return deleteProducts;
}catch (error){
    return error
}    
}

const postProducts = async (nameProducts, descriptionProducts, serialProducts )=>{
    const serchProducts = await productsModel.findOne({serialProducts});
    console.log(serchProducts);
    if (!serchProducts){
        try{
            const products = new productsModel({nameProducts, descriptionProducts, serialProducts});
            await products.save();
            return 'producto guardado desde el servicio';
        }   catch (error){
            return error;
    }
    }else{
        return 'El producto ya existe'
    }
}

const patchProducts = async (id, nameProducts, descriptionProducts, serialProducts) =>{
    try{
        const patchProductsController = await productsModel.findByIdAndUpdate(id, {nameProducts, descriptionProducts, serialProducts}, {new: true})
        return patchProductsController;
    }catch (error){
        return error
    }
}



module.exports = {getProducts, putProducts, deleteProducts, postProducts, patchProducts}