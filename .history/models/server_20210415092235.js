const express = require('express');

class Server {

     constructor() {
          this.app = express();   // <== crear la app de express como una propiedad en la misma clase de servidor 
          this.port = process.env.PORT;

          // Middlewares(funciones que le van añadir otras funciones al server)ñ
          
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