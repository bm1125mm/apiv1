const UserModel = require('../models/user.models');
const bcryptjs = require('bcryptjs');

const getUsers = async () => {
  try {
    const listUser = await UserModel.find({ enabled: true });
    return listUser;
  } catch (error) {
    return error;
  }
};

const putUsers = async (id, firstName, lastName, email, password) => {
  try {
    const userUpdate = await UserModel.findByIdAndUpdate(id, { firstName, lastName, email, password }, { new: true });
    return userUpdate;
  } catch (error) {
    return error;
  }
};

const deleteUsers = async (id) => {
  const userToDelete = await UserModel.findByid(id);
  if (userToDelete) {
    try {
      const deleteUsers = await UserModel.findByIdAndUpdate(id, {
        enabled: false,
      });
      return deleteUsers;
    } catch (error) {
      return error;
    }
  } else {
    return 'Error al buscar el id';
  }
};

const postUsers = async (firstName, lastName, email, password) => {
  const searchUser = await UserModel.findOne({ email });

  console.log(searchUser);
  if (!searchUser) {
    try {
      const salt = bcryptjs.genSaltSync(1);
      const user = new UserModel({ firstName, lastName, email, password });
      user.password = bcryptjs.hashSync(password, salt);
      await user.save();
      return 'usuario guardado desde el servicio';
    } catch (error) {
      return error;
    }
  } else {
    return 'El usuario ya existe';
  }
};

const patchUsers = async (id, firstName, lastName) => {
  try {
    const userPatchUpdate = await UserModel.findByIdAndUpdate(id, { firstName, lastName }, { new: true });
    return userPatchUpdate;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getUsers,
  putUsers,
  deleteUsers,
  postUsers,
  patchUsers,
};
