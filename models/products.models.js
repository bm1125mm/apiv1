const { Schema, model } = require('mongoose');

const ProductsSchema = Schema({
  nameProducts: { type: String }, //campo de requerido
  descriptionProducts: { type: String },
  serialProducts: { type: Number }, //campo de requerido
});

module.exports = model('products', ProductsSchema);
