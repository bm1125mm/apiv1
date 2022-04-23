const { response } = require('express');
const UsersServices = require('../services/usuarios.services');

const getUsersController = (req, resp = response) => {
  const result = UsersServices.getUsers();
  return resp.status(200).json(result);
};

module.exports = {
  getUsersController,
};
