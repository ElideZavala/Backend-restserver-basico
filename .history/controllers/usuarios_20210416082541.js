const { response } = require('express'); // <== Solo para que apararescan las funcionalidades

const usuariosGet = (req, res = response ) => {

     res.json({
          msg: 'get API - controlador'
     });
};

const usuariosPost =  (req, res) => {
     res.status(404).json({
          msg: 'post API - controlador'
     });
};

const usuariosPut = (req, res) => {
     res.status(500).json({
          msg: 'Put API - controlador'
     });
};

const usuariosPath = (req, res) => {
     res.json({
          msg: 'patch API - controlador'
     });
};
// const usuarios

module.exports = {
     usuariosGet,
     usuariosPost,
     usuariosPut,
     usuariosPath
     
}