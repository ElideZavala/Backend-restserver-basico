const jwt = require('jsonwebtoken');


const generarJWT = ( uid = '' ) => {
     
     return new Promise( (resolve, reject) => {

          const payload = { uid }; 

          jwt.sing( payload, process.env.SECRETORPRIVATEKEY, {             // <== Firma del usuario 
               expiresIn: '4h'
          })      

     })
}    

module.exports = {
     generarJWT 
}