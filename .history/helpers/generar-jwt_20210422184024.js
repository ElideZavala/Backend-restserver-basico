const jwt = require('jsonwebtoken');


const generarJWT = ( uid = '' ) => {
     
     return new Promise( (resolve, reject) => {

          const payload = { uid }; 

          jwt.sing( payload, )      // <== Firma del usuario 

     })
}    

module.exports = {
     generarJWT 
}