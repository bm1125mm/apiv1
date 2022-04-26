const { response } = require('express');
const UsersServices = require('../services/usuarios.services');

const getUsersController = (req, resp = response) => {
  const resultUsers = UsersServices.getUsers();
  return resp.status(200).json(resultUsers);
};

const putUsersController = (req, resp = response) => {
const putUsers = UsersServices.putUsers();
return resp.status(200).json(putUsers);

};

const deleteUsersController = (req, resp = response) => {
    const deleteUsers = UsersServices.deleteUsers();
    return resp.status(200).json(deleteUsers);
    
    };

    const postUsersController = (req, resp = response) => {
        const postUsers = UsersServices.postUsers();
        return resp.status(200).json(postUsers);
        
        };

        const patchUsersController = (req, resp = response) => {
          const patchUsers = UsersServices.patchUsers();
          return resp.status(200).json(patchUsers);
          
          };
module.exports = {
  getUsersController, putUsersController, deleteUsersController, postUsersController, patchUsersController
};
