const { Schema, model } = require('mongoose');

const ProductsSchema = Schema({
  nameProducts: { type: String, required: [true, 'El nombre del producto es requerido'] }, 
  descriptionProducts: { type: String },
  serialProducts: { type: Number, required: [true, 'El número de serie es requerido'] }, 
});

module.exports = model('products', ProductsSchema);
