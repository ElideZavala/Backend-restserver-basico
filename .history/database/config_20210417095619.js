const mongoose = require('mongoose');


const dbConnection = async() => {

     try {

     } catch {
          console.log(error);
          throw new Error('Error a la hora de iniciar la base de datos');
     }
}



module.exports = {
     dbConnection
}