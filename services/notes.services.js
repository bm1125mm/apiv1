const notesModels = require('../models/notes.models');
const NoteModel = require('../models/notes.models')


const getNotes = async (Id)=>{
  try{  
  const listNotes = await NoteModel.findById({Id});
  return listNotes;
  }catch(error){
    return error
  }
}

const postNotes = async (title, description, userId) =>{
    try{
    const creaetNotes = new notesModels({title, description, userId});
    await creaetNotes.save();
    return 'nota creada satisfactoriamente';
    }catch(error){
      return error;
    }
 
}




module.exports = {getNotes, postNotes}


