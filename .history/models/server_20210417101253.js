const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

     constructor() {
          this.app = express();   // <== create the express app as a property in the same server class
          this.port = process.env.PORT;
          this.usuariosPath = '/api/usuarios';

          // Conectar a base de datos
          this.conectarDB();

          // Middlewares(functions that will add other functions to the server);
          this.middleware();
          
          // Paths of my application
          this.routes();  // <== will trigger the router method
     }

     async conectarDB() {
          await dbConnection();
     }

     middleware() {    // { .use } <== keyword to indicate that it is a middleware

          // CORS
          this.app.use( cors() );

          // Lectura y parseo del body
          this.app.use( express.json() )

          // public directory
          this.app.use( express.static('public') );
     }

     routes() {
          // direction to the routes
          this.app.use(this.usuariosPath, require('../routers/usuarios'));
     }

     listen() {
          this.app.listen(this.port, () => {
               console.log('Servidor corriendo en puerto', this.port);
          
          });
     }
}

module.exports = Server;