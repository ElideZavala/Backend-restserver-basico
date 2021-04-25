const { response } = require('express');     // <== Solo para que lo ayude con el tipado 

// Los controladores no son mas que funcionalidades

const login = (req, res = response) => {


     res.json({ 
          msg: 'Login ok'
     })
}

module.exports = {
     login
}