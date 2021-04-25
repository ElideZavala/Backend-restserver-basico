const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validarCampos'); 

const { login } = require('../controllers/auth');


const router = Router();

router.post('/login',[
     check('correo', 'El correo es obligatorio').isEmail(),
     validarCampos 
], login );

module.exports = router;