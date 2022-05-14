const { response } = require('express');
const res = require('express/lib/response');
const UsersServices = require('../services/usuarios.services');

const getUsersController = async (req, resp = response) => {
  const listUsers = await UsersServices.getUsers();
  return resp.status(200).json({
    status: 200,
    message: 'Lista usuarios cargada correctamente',
    users: listUsers, //
  });
};

const putUsersController = async(req, resp = response) => {
  const {firstName, lastName} = req.body 
  const {id} = req.params
  console.log(id);
  const putUsers = await UsersServices.putUsers(id, firstName, lastName);
  return resp.status(200).json({
    status: 200,
    message: 'usuario actualizado correctamente',
    putUsers
  });
};

const deleteUsersController = async (req, resp = response) => {
  const {id} = req.params
  console.log(id);
  const deleteUsers = await UsersServices.deleteUsers(id);
  return resp.status(200).json({
    deleteUsers,
    status: 204,
    message: "Usuario eliminado"
  });
  
};

const postUsersController = async (req, resp = response) => {
  const { firstName, lastName } = req.body; //capturamos informacion que viene desde el front
  try {
    const postUsers = await UsersServices.postUsers(firstName, lastName);
    console.log(postUsers);
    return resp.status(201).json({
      status: 201,
      message: 'Usuario creado satisfactoriamente',
    });
  } catch (error) {
    console.log('Error', error);
  }
};

const patchUsersController = (req, resp = response) => {
  const patchUsers = UsersServices.patchUsers();
  return resp.status(200).json(patchUsers);
};
module.exports = {
  getUsersController,
  putUsersController,
  deleteUsersController,
  postUsersController,
  patchUsersController,
};
