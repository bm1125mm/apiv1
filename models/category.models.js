const { Schema, model } = require('mongoose');

const CategoySchema = Schema({
  name: { type: String }, //campo de requerido
});

module.exports = model('Category', CategoySchema);
