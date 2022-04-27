const { response } = require('express');
const res = require('express/lib/response');
const UsersServices = require('../services/usuarios.services');


const usuarios = [ {id:1, nombre:'Cristian'}, {id: 2, nombre:'Facundo'}]



const getUsersController = (req, resp = response) => {
  //vamos a obtener lo que viene por parametro en la url
  let userId = req.params.id
  //hacemos un match con el id, es decir buscamos por id (en cada objeto, dentro usuarios) si es igual al userId
  let searchID = usuarios.find(usuario => usuario.id === parseInt(userId))

  if(!searchID){
    resp.status(404).send('El usuario buscado no existe')
  }
  //luego sigue el codigo normalmente devolviendo lo que el servicio nos va a devolver
  return resp.status(200).json(searchID);
};

const putUsersController = (req, resp = response) => {
const putUsers = UsersServices.putUsers(userID);
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
