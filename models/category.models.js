const { Schema, model } = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const CategoySchema = Schema({
  name: { type: String, require: [true, 'El nombre de la categoria es requerido'] }, 
  description: {type: String}
});

module.exports = model('Category', CategoySchema);
