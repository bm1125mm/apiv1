const userModels = require('../models/user.models');
const UserModel = require('../models/user.models');

const getUsers = async () => {
  try {
    const listUser = await UserModel.find();
    return listUser;
  } catch (error) {
    return error;
  }
};

const putUsers = async (id, firstName, lastName) => {
  try {
    const userUpdate = await UserModel.findByIdAndUpdate(
      id,
      { firstName, lastName },
      { new: true },
    );
    return userUpdate;
  } catch (error) {
    return error;
  }
};

const deleteUsers = async (id) => {
  try {
    const userToDelete = await UserModel.findById(id);
    console.log(userToDelete);
    const deleteUsers = await UserModel.findByIdAndDelete(id);
    return deleteUsers;
  } catch (error) {
    return error;
  }
};

const postUsers = async (firstName, lastName, email) => {
  const searchUser = await UserModel.findOne({ email });
  console.log(searchUser);
  if (!searchUser) {
    try {
      const user = new UserModel({ firstName, lastName, email });
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
    const userPatchUpdate = await UserModel.findByIdAndUpdate(
      id,
      { firstName, lastName },
      { new: true },
    );
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
