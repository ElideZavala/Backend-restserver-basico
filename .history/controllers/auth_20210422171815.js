const { response } = require('express');     // <== Solo para que lo ayude con el tipado 

// Los controladores no son mas que funcionalidades

const login = (req, res = response) => {

     const { correo, password } = req.body;

     try {
          
     } catch (error) {
          console.log(error)
          return res.status(500).json({
               msg: 'Hable con el administrador'
          })
     }


     res.json({ 
          msg: 'Login ok',
          correo,
          password
     })
}

module.exports = {
     login
}