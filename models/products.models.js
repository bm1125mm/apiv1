const { Schema, model } = require('mongoose');

const ProductsSchema = Schema({
  nameProducts: { type: String, require: [true, 'El nombre del producto es requerido'] }, 
  descriptionProducts: { type: String },
  serialProducts: { type: Number, require: [true, 'El número de serie es requerido'] }, 
});

module.exports = model('products', ProductsSchema);
