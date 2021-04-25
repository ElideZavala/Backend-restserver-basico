const { Router } = require('express');
const { check } = require('express-validator');





const router = Router();

router.post('/login', usuariosGet );

module.exports = router;