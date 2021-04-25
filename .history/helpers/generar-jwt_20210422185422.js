const jwt = require('jsonwebtoken');


const generarJWT = ( uid = '' ) => {
     
     return new Promise( (resolve, reject) => {

          const payload = { uid }; 

          jwt.sing( payload, process.env.SECRETORPRIVATEKEY, {             // <== Firma del usuario 
               expiresIn: '4h'                                             // <== Tiempo de expiracion 
          }, ( err, token ) => {

               if ( err ) {
                    console.log(err);
                    reject( 'No se pudo generar el token' )
               } else {
                    resolve( token );
               }
          })      

     })
}    

module.exports = {
     generarJWT 
}