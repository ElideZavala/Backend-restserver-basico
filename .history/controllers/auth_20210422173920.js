const { response } = require('express');     // <== Solo para que lo ayude con el tipado 
const Usuario = require('../models/usuario');

// Los controladores no son mas que funcionalidades

const login = (req, res = response) => {

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


          // Verificar la contraseña


          // Generar JWT

          
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