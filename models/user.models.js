const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  firstName: {
    type: String,
    required: [true, 'El primer nombre es requerido'],
  },
  lastName: { type: String, required: [true, 'El apellido es requerido'] },
  email: { type: String, required: [true, 'El email es requerido'] },
});

module.exports = model('Users', UserSchema);
