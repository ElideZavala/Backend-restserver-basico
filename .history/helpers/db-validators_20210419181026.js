const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRolValido = async(rol = '') => {   // <== Validacion personalizada
     const existeRol = await Role.findOne({ rol });
     if ( !existeRol ) {
           throw new Error(`El rol ${ rol } no está registrado en la BD`);  // <== LANZAR un error personalizado
     }
}

const emailExiste = async(correo = '') => {
     const existeEmail = await Usuario.findOne({ correo });
     if( existeEmail ) {
         throw new Error(`El correo ${ correo } ya se encuentra registrado`);
     }
}

const existeUsuarioPorId = async( id ) => {
     
     // Verificar si el id del usuario existe
     const existeUsuario = await Usuario.findOne({ id });
     if( !existeUsuario ) {
         throw new Error(`El id no existe ${ id }`);
     }    
}

module.exports = {
     esRolValido,
     emailExiste,
     existeUsuarioPorId
}