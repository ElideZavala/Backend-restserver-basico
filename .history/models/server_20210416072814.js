const express = require('express');

class Server {

     constructor() {
          this.app = express();   // <== create the express app as a property in the same server class
          this.port = process.env.PORT;

          // Middlewares(functions that will add other functions to the server);
          this.middleware();
          
          // Paths of my application
          this.routes();  // <== will trigger the router method
     }

     middleware() {    // { .use } <== keyword to indicate that it is a middleware
          // public directory
          this.app.use( express.static('public') );
     }

     routes() {

          this.app.get('/api', (req, res) => {
               res.json({
                    msg: 'get API'
               });
          });

          this.app.put('/api', (req, res) => {
               res.status(400).json({
                    msg: 'put API'
               });
          });

          this.app.post('/api', (req, res) => {
               res.json({
                    msg: 'post API'
               });
          });

          this.app.patch('/api', (req, res) => {
               res.json({
                    msg: 'patch API'
               });
          });
     }

     listen() {
          this.app.listen(this.port, () => {
               console.log('Servidor corriendo en puerto', this.port);
          });
     }
}

module.exports = Server;