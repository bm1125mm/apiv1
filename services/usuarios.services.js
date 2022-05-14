const UserModel = require('../models/user.models');

const getUsers = async () => {
  const listUser = await UserModel.find();
  return listUser;
};

const putUsers = async (id, firstName, lastName) => {
const userUpdate = await UserModel.findByIdAndUpdate(id, {firstName, lastName}, {new: true}) 

return userUpdate;
};

const deleteUsers = async (id) => {
  const userToDelete = await UserModel.findById(id);
  console.log(userToDelete);
  const deleteUsers = await UserModel.findByIdAndDelete(id,);
  return userToDelete;
 
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
