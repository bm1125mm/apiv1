const {Schema, model} = require ('mongoose');

const ProductsSchema = Schema({
    nameProducts: {type: String},
    descriptionProducts: {type: String},
    serialProducts: {type: Number}
})

module.exports = model('products', ProductsSchema)