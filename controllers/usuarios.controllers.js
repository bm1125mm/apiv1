const { response } = require('express');
const res = require('express/lib/response');
const UsersServices = require('../services/usuarios.services');

const getUsersController = async (req, resp = response) => {
  try{
  const listUsers = await UsersServices.getUsers();
  return resp.status(200).json({
    status: 200,
    message: 'Lista usuarios cargada correctamente',
    users: listUsers,
  });
}catch(error){
  console.log('error', error)
}
};

const putUsersController = async(req, resp = response) => {
  const {firstName, lastName} = req.body 
  const {id} = req.params
  console.log(id);
  try{
  const putUsers = await UsersServices.putUsers(id, firstName, lastName);
  return resp.status(200).json({
    status: 200,
    message: 'usuario actualizado correctamente',
    putUsers
  });
}catch (error){
  console.log('error', error)
}
};

const deleteUsersController = async (req, resp = response) => {
  const {id} = req.params
  console.log(id);
  try{
  const deleteUsers = await UsersServices.deleteUsers(id);
    return resp.status(200).json({
    deleteUsers,
    status: 204,
    message: "Usuario eliminado"
  });
}catch (error){
  console.log('error', error)
}
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

const patchUsersController = async (req, resp = response) => {
  const {firstName, lastName} = req.body;
  const {id} = req.params;
  console.log(id);
  try{
  const patchUsers = await UsersServices.patchUsers(id, firstName, lastName);
  return resp.status(200).json({
  status: 200,
  mesagge: 'Usuario actializado',
  patchUsers
  })
}catch(error){
  console.log('error', error)
}
};

module.exports = {
  getUsersController,
  putUsersController,
  deleteUsersController,
  postUsersController,
  patchUsersController,
};
