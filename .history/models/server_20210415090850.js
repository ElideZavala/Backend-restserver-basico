const express = require('express');

class Server {

     constructor() {
          this.app = express();   // <== crear la app de express como una propiedad en la misma clase de servidor 
    
          this.routes();  // <== disparara el metodo router
     }

     routes() {
          this.app.get('/', (req, res) => {
               res.send('Hello Mundo');
          });
     }

     listen() {
          this.app.listen(port, () => {
               console.log('Servidor corriendo en puerto', port);
          });
     }
}

module.exports = Server;