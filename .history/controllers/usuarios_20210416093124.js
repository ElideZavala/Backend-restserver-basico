const { response, request } = require('express'); // <== Solo para que apararescan las funcionalidades

const usuariosGet = (req = rquest, res = response ) => {

     const query = req.query;

     res.json({
          msg: 'get API - controlador'
     });
};

const usuariosPost =  (req, res) => {
     const { nombre, Ocupacion } = req.body;
     res.status(404).json({
          msg: 'post API - controlador',
          nombre,
          Ocupacion
     });
};

const usuariosPut = (req, res) => {

     const id = req.params.id;

     res.status(500).json({
          msg: 'Put API - controlador',
          id
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