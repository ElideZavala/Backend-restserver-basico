const { response, request } = require('express'); // <== Solo para que apararescan las funcionalidades
const Usuario = require('../models/usuario');

const usuariosGet = (req = request, res = response ) => {

     const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

     res.json({
          msg: 'get API - controlador',
          q,
          nombre,
          apikey,
          page,
          limit
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