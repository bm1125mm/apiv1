const { Schema, model } = require("mongoose");

const CategoySchema = Schema({
    name: {type: String},
})

module.exports = model('Category', CategoySchema)