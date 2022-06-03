const noteServices = require ('../services/notes.services')

const getNotesController = async (req, resp)=>{
    try{
        const listNotes = await noteServices.getNotes();
        return resp.status(200).json({
        message: 'Notas cargadas correctamente',
        listNotes
});
    }catch(error){
        console.log('error', error)
    }
}

const postNotesController = async (req, resp) =>{
    const {title, description, userId} = req.body;
    try{
    const postNotes = await noteServices.postNotes(title, description, userId)
    console.log (postNotes);
    return resp.status(201).json({
    status: 201,
    message: postNotes
    });    
    }catch(error){
    console.log('error', error)
    }
}




module.exports = {getNotesController, postNotesController}