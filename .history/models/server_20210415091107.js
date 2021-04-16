const express = require('express');
require('dotenv').config();

class Server {

     constructor() {
          this.app = express();   // <== crear la app de express como una propiedad en la misma clase de servidor 
          this.port = process.env.PORT;
          
          this.routes();  // <== disparara el metodo router
     }

     routes() {
          this.app.get('/', (req, res) => {
               res.send('Hello Mundo');
          });
     }

     listen() {
          this.app.listen(this.port, () => {
               console.log('Servidor corriendo en puerto', this.port);
          });
     }
}

module.exports = Server;