const { request, response } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT  = ( req = request, res = response , next ) => {

     const token = req.header('x-token');                   // <== Leer el token   

     console.log(token);

     if ( !token ) {
          return res.status(401).json({
               msg: 'No hay token en la petición'
          })
     }
     next();
}


module.exports = {
     validarJWT
}