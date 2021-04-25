const { response } = require('express');             // <== Solo para que lo ayude con el tipado 
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');

// Los controladores no son mas que funcionalidades

const login = async(req, res = response) => {

     const { correo, password } = req.body;

     try {
     
          // Verificar si el email existe
          const usuario = await Usuario.findOne({ correo });
          if( !usuario ){
               return res.status(400).json({ 
                    msg: 'Usuario / Password no son correctos - correo'
               });
          }

          // Si el usuario está activo 
          if( !usuario.estado ){                          // <== Es lo mismo como si tuviera estado === false 
               return res.status(400).json({ 
                    msg: 'Usuario / Password no son correctos - estado: false'
               });
          }

          // Verificar la contraseña
          const validPassword = bcryptjs.compareSync( password, usuario.password );  // <== Comparar el password del req.body y el de la base de datos. 
          if ( !validPassword ) {
               return res.status(400).json({ 
                    msg: 'Usuario / Password no son correctos - password'
               });
          }


          // Generar JWT
          const token = await generalJWT( usuario.id );
          
          res.json({ 
               msg: 'Login ok'
          });

     } catch (error) {
          console.log(error)
          return res.status(500).json({
               msg: 'Hable con el administrador'
          });
     }

}

module.exports = {
     login
}