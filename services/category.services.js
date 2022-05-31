const categoryModels = require('../models/category.models');
const CategoryModels = require ('../models/category.models')

const getCategory = async() =>{
try{
    const listCategiory = await CategoryModels.find();
    return listCategiory;
}catch(error){
    return error
}
}

const putCategory = async (id, name)=>{
    try{
        const categoryUpdate = CategoryModels.findByIdAndUpdate (id, {name}, {new: true});
        return categoryUpdate;
    }catch(error){
        return error
    }
}

const deleteCategory = async (id)=>{
    try{
        const categoryToDelete = await CategoryModels.findById (id);
        console.log(categoryToDelete);
        const deleteCategory = await categoryModels.findByIdAndDelete (id,);
        return deleteCategory;
    }catch(error){
        return error
    }
}

const postCategory = async(name, description)=>{
     const serchCategory = await categoryModels.findOne ({name});
     console.log(serchCategory)
if(!serchCategory){
     try {
    const categorySave = new CategoryModels({name, description})
    await categorySave.save();
    return `La categoria: ${name} fue creada satisfactoriamente`
} catch (error) {
    console.log(error)
}
}else{
    return 'La categoria ya existe'
}
}

const patchCategory = async (id, name)=>{
    try{
        const patchCategoyServ = await CategoryModels.findByIdAndUpdate(id, {name}, {new: true});
        return patchCategoyServ;
    }catch(error){
        return error
    }
}


module.exports = {getCategory, putCategory, deleteCategory, postCategory, patchCategory
}