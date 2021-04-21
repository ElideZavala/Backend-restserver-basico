const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const Role = require('../models/role');

const { usuariosGet,
usuariosPost,
      usuariosPut, 
      usuariosPath, 
      usuariosDelete } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet );  // <== No se manda a llamar lafuncion si la referencia a esta. 

router.post('/', [
     check('nombre', 'El nombre es obligatorio').not().notEmpty(),
     check('password', 'El password debe ser de más de 6 letras').isLength({ min: 6}),
     check('correo', 'El correo no es válido').isEmail(),
     //check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
     check('rol').custom( async(rol = '') => {   // <== Validacion personalizada
           const existeRol = await Role.findOne({ rol });
           if ( !existeRol ) {
                 throw new Error(`El rol ${ rol } no está registrado en la BD`);  // <== LANZAR un error personalizado
           }
     }),
     validarCampos
], usuariosPost );  

router.put('/:id', usuariosPut );

router.patch('/', usuariosPath);

router.delete('/', usuariosDelete);

module.exports = router;