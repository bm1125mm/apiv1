const express = require('express');
const userRoutes = require('../routes/usuarios.routes');
const porductsRoutes = require('../routes/products.routes');
const categoryRoutes = require('../routes/category.routes');
const notesRoutes = require('../routes/notes.routes');
const authRoutes = require('../routes/auth.routes');
const { dbConection } = require('../database/config');

class Server {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.upConection();
  }

  listen(port) {
    this.app.listen(port);
    console.log('escuchando puerto:', port);
  }
  routes() {
    this.app.use('/usuarios', userRoutes);
    this.app.use('/products', porductsRoutes);
    this.app.use('/category', categoryRoutes);
    this.app.use('/notes', notesRoutes);
    this.app.use('/auth', authRoutes);
  }

  upConection() {
    dbConection();
  }

  middlewares() {
    this.app.use(express.json());
  }
}
module.exports = Server;
