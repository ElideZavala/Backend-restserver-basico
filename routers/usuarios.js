const { Router } = require('express');
const { usuariosGet,
      usuariosPost,
      usuariosPut, 
      usuariosPath, 
      usuariosDelete } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet );  // <== No se manda a llamar lafuncion si la referencia a esta. 

router.post('/', usuariosPost );

router.put('/:id', usuariosPut );

router.patch('/', usuariosPath);

router.delete('/', usuariosDelete);

module.exports = router;