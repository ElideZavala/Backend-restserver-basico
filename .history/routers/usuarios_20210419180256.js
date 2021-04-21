const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { esRolValido, emailExiste } = require('../helpers/db-validators');

const { usuariosGet,
        usuariosPost,
        usuariosPut, 
        usuariosPath, 
        usuariosDelete } = require('../controllers/usuarios');


const router = Router();

router.get('/', usuariosGet );  // <== No se manda a llamar lafuncion si la referencia a esta. 

router.put('/:id', [
     check('id', 'No es un ID válido').isMongoId(),
     validarCampos

], usuariosPut );

router.post('/', [
     check('nombre', 'El nombre es obligatorio').not().notEmpty(),
     check('password', 'El password debe ser de más de 6 letras').isLength({ min: 6}),
     check('correo', 'El correo no es válido').isEmail(),
     check('correo').custom( emailExiste ),
     //check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
     check('rol').custom( esRolValido ),
     validarCampos
], usuariosPost );  


router.patch('/', usuariosPath);

router.delete('/', usuariosDelete);

module.exports = router;