const mongoose = require('mongoose');

const dbConection = async ()=>{
    try{ 

      mongoose.connect('mongodb://localhost:27017/tienda', console.log('conexion exitosa'))


    }
    catch(error){

        console.log('error al conectarse', error)

    }

}

module.exports = {
    dbConection
}