//si todo lo demas esta oktenemos que dar un mensaje login Successfully y generarle un TOKEN
const UserModel = require('../models/user.models');
const bcryptjs = require('bcryptjs');

const authController = async (email, password) => {
  try {
    const findUserExist = await UserModel.findOne({ email });
    if (!findUserExist) {
      throw new Error('Usuario / Password incorrect');
    }
    if (!findUserExist.enabled) {
      throw new Error('Usuario / Password incorrect');
    }
    const validPassword = bcryptjs.compareSync(
      password,
      findUserExist.password,
    );

    if (!validPassword) {
      throw new Error('Usuario / Password incorrect');
    }

    return 'Login Correcto';
  } catch (error) {
    throw Error(error);
  }
};

module.exports = {
  authController,
};
