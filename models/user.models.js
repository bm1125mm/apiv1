const { Schema, model } = require("mongoose");

const UserSchema = Schema({
    firstName: {type: String},
    lastName: {type: String}
})

module.exports = model('Users', UserSchema)