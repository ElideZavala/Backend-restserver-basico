const { request, response } = require('express');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario'); 

const validarJWT  = async( req = request, res = response , next ) => {

     const token = req.header('x-token');                   // <== Leer el token   

     console.log(token);

     if ( !token ) {
          return res.status(401).json({
               msg: 'No hay token en la petición'
          });
     }

     try {
          
          const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );

          // leer el usuario que corresponde al uid 
          
          usuario = await Usuario.findById( uid );  // <== Encontrar un usuario con el mismo id.

          // req.usuario = usuario;

          req.usuario = usuario;
          

          next();
     } catch (error) {
          console.log(error);
          res.status(401).json({
               msg: 'Token no válido'
          })
     }
     
}


module.exports = {
     validarJWT
}