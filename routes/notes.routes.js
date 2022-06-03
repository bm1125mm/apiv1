const { Router } = require('express');
const {getNotesController, postNotesController} = require('../controllers/notes.controllers');

const notesrouter = Router();

notesrouter.get('/lista', getNotesController);
notesrouter.post('/agregar', postNotesController)


module.exports = notesrouter;
