const express = require('express');
const cors = require('cors');

class Server {

     constructor() {
          this.app = express();   // <== create the express app as a property in the same server class
          this.port = process.env.PORT;
          this.usuariosPath = '/api/usuarios';

          // Middlewares(functions that will add other functions to the server);
          this.middleware();
          
          // Paths of my application
          this.routes();  // <== will trigger the router method
     }

     middleware() {    // { .use } <== keyword to indicate that it is a middleware

          // CORS
          this.app.use( cors() );

          // public directory
          this.app.use( express.static('public') );
     }

     routes() {
          // direction to the routes
          this.app.use('/api/usuarios', require('../routers/user'));
     }

     listen() {
          this.app.listen(this.port, () => {
               console.log('Servidor corriendo en puerto', this.port);
          
          });
     }
}

module.exports = Server;