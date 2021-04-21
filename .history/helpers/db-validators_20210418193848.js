const Role = require('../models/role');

const esRolValido = async(rol = '') => {   // <== Validacion personalizada
     const existeRol = await Role.findOne({ rol });
     if ( !existeRol ) {
           throw new Error(`El rol ${ rol } no está registrado en la BD`);  // <== LANZAR un error personalizado
     }
}

const emailExiste = async(correo = '') => {
     const existeEmail = await Usuario.findOne({ correo });
     if( existeEmail ) {
          return res.status(400).json({ 
               msg: 'Ese correo ya esta  registrado'
          });
     }
}

module.exports = {
     esRolValido,
     emailExiste
}