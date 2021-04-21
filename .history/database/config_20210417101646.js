const mongoose = require('mongoose');


const dbConnection = async() => {

     try {

          await mongoose.connect( process.env.MONGODB_CNN, { 
               useNewUrlParser: true,
               useUnifield: true,
               useCreateIndex: true,
               useFindAndModify: false,
               useUnifiedTopology: true
          });

          console.log('base de datos online');

     } catch {
          console.log(error);
          throw new Error('Error a la hora de iniciar la base de datos');
     }
}



module.exports = {
     dbConnection
}