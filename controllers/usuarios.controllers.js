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

module.exports = {
  getUsersController, putUsersController
};
