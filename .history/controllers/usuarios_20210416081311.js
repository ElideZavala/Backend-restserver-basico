const { response } = require('express'); // <== Solo para que apararescan las funcionalidades

const usuariosGet = (req, res = response ) => {

     res.json({
          msg: 'get API'
     });
}

module.exports = {
     usuariosGet
}