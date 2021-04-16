const { Router } = require('express');
const { usuariosGet } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet );

router.put('/', (req, res) => {
     res.status(404).json({
          msg: 'put API'
     });
});

router.post('/', (req, res) => {
     res.status(500).json({
          msg: 'post API'
     });
});

router.patch('/', (req, res) => {
     res.json({
          msg: 'patch API'
     });
});



module.exports = router;