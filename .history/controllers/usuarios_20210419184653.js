const { response, request } = require('express'); // <== Solo para que apararescan las funcionalidades
const bcryptjs = require('bcryptjs');

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

const usuariosPost =  async(req, res) => {

     const { nombre, correo, password, rol} = req.body;
     const usuario = new Usuario( { nombre, correo, password, rol } );

     // Encriptar la contraseña
     const salt = bcryptjs.genSaltSync(10);  // <== numero de vueltas al sifrado
     usuario.password = bcryptjs.hashSync( password, salt); // <== Encriptarlo en una sola via, pide el passwoed y el salt

     await usuario.save();
     
     res.json({
          usuario
     });
};

const usuariosPut = async(req, res = response) => {

     const { id } = req.params;
     const { _id, password, google, correo, ...resto } = req.body;    

     if ( password ) {
          // Encriptar la contraseña
          const salt = bcryptjs.genSaltSync();  
          resto.password = bcryptjs.hashSync( password, salt);
     }

     const usuario = await Usuario.findByIdAndUpdate( id, resto); //<== Buscalo por el id y actualiza la informacion de resto.

     res.json({
          msg: 'Put API - usuariosPut',
          usuario
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