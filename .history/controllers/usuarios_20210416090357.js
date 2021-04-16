const { response } = require('express'); // <== Solo para que apararescan las funcionalidades

const usuariosGet = (req, res = response ) => {

     res.json({
          msg: 'get API - controlador'
     });
};

const usuariosPost =  (req, res) => {

     const body = req.body;

     res.status(404).json({
          msg: 'post API - controlador',
          body
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

const usuariosDelete = (req, res) => {
     res.json({
          msg: 'Delete API - controlador'
     })
}
// const usuarios

module.exports = {
     usuariosGet,
     usuariosPost,
     usuariosPut,
     usuariosPath,
     usuariosDelete
     
}