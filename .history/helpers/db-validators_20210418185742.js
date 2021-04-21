

const esRolValido = async(rol = '') => {   // <== Validacion personalizada
     const existeRol = await Role.findOne({ rol });
     if ( !existeRol ) {
           throw new Error(`El rol ${ rol } no está registrado en la BD`);  // <== LANZAR un error personalizado
     }
}