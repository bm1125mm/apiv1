const express = require('express');
const userRoutes = require('../routes/usuarios.routes');
const porductsRoutes = require('../routes/products.routes')

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
    this.app.use('/usuarios', userRoutes);
    this.app.use('/products', porductsRoutes)
}

upConection(){
    dbConection()
}

middlewares(){
    this.app.use(express.json())
}


}
module.exports = Server


