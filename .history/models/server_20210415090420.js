const express = require('express');

class Server {

     constructor() {
          this.app = express();   // <== crear la app de express como una propiedad en la misma clase de servidor 
     }
}

module.exports = Server;