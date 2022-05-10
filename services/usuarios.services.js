const UserModel = require('../models/user.models');

const getUsers = async () => {
  const listUser = await UserModel.find();
  return listUser;
};

const putUsers = () => {
  return 'actualizado usuarios desde el servicio';
};

const deleteUsers = () => {
  return 'borrando usuarios desde el servicio';
};

const postUsers = async (firstName, lastName) => {
  try {
    const user = new UserModel({ firstName, lastName });
    await user.save();
    return 'usuario guardado desde el servicio';
  } catch (error) {
    return error;
  }
};

const patchUsers = () => {
  return 'usuarios actualizado desde el servicio';
};

module.exports = {
  getUsers,
  putUsers,
  deleteUsers,
  postUsers,
  patchUsers,
};
