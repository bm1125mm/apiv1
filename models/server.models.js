const express = require('express');
const appRoutes = require('../routes/usuarios.routes');

class Server {

constructor(){
    this.app = express();
    this.routes();
}

listen(port){

this.app.listen(port);    
console.log('escuchando puerto:', port);

}
routes(){

    this.app.use('/', appRoutes);

}

}
module.exports = Server


