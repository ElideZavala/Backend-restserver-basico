const { Router } = require('express');
const { check } = require('express-validator');

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
], usuariosPost );  

router.put('/:id', usuariosPut );

router.patch('/', usuariosPath);

router.delete('/', usuariosDelete);

module.exports = router;