const { response, request } = require('express'); // <== Solo para que apararescan las funcionalidades
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');
const { validationResult } = require('express-validator');

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

const usuariosPost =  async(req, res) => {

     const errors = validationResult


     const { nombre, correo, password, rol} = req.body;
     const usuario = new Usuario( { nombre, correo, password, rol } );

     // Verificar si el correo existente
     const existeEmail = await Usuario.findOne({ correo });
     if( existeEmail ) {
          return res.status(400).json({ 
               msg: 'Ese correo ya esta  registrado'
          });
     }

     // Encriptar la contraseña
     const salt = bcryptjs.genSaltSync(10);  // <== numero de vueltas al sifrado
     usuario.password = bcryptjs.hashSync( password, salt); // <== Encriptarlo en una sola via, pide el passwoed y el salt

     await usuario.save();
     
     res.json({
          usuario
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