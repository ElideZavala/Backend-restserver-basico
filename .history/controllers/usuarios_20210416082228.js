const { response } = require('express'); // <== Solo para que apararescan las funcionalidades

const usuariosGet = (req, res = response ) => {

     res.json({
          msg: 'get API - controlador'
     });
}

const usuariosPost =  (req, res) => {
     res.status(404).json({
          msg: 'post API - controlador'
     });
}

const usuariosPut = (req, res) => {
     res.status(500).json({
          msg: 'Put API - ccontrolador'
     });
}
// const usuarios

module.exports = {
     usuariosGet,
     usuariosPost,
     usuariosPut
}