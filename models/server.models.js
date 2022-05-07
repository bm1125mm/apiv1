const express = require('express');
const appRoutes = require('../routes/usuarios.routes');
const {dbConection} = require ('../database/config')


class Server {

constructor(){
    this.app = express();
    this.middlewares();
    this.routes();
    this.upConection();

}

listen(port){

    this.app.listen(port);    
    console.log('escuchando puerto:', port);

}
routes(){

    this.app.use('/', appRoutes);

}

upConection(){
    dbConection()
}

middlewares(){
    this.app.use(express.json())
}


}
module.exports = Server


