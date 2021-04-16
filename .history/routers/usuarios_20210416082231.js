const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosPut } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet );  // <== No se manda a llamar lafuncion si la referencia a esta. 

router.post('/', usuariosPost );

router.put('/', usuariosPut);

router.patch('/', (req, res) => {
     res.json({
          msg: 'patch API'
     });
});



module.exports = router;