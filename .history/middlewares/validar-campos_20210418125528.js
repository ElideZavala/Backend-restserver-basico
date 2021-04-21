const { validationResult } = require('express-validator');

const validarCampos = ( req, res, next ) => {

     const errors = validationResult(req);
     if( !errors.isEmpty() ) {
          return res.status(400).json(errors);
     }

     next();             //<== si llega esta punto por favor sigue con el siguiente middleware  
}


module.exports = {
     validarCampos
}