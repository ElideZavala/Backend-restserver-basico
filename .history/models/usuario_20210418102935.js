const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
     nombre: {
          type: String,
          required: [ true, 'El nombre es obligatorio'],
          unique: true
     },
     correo: {
          type: String,
          required: [ true, 'El correo es obligatorio'],
     },
     password: {
          type: String,
          required: [ true, 'La contraseña es obligatoria'],
     },
     img: {
          type: String
     },
     rol: {
          type: String,
          required: true,
          emun: ['ADMIN_ROLE', 'USER_ROLE'] 
     },
     estado: {
          type: Boolean,
          default: true,
     },
     google: {
          type: Boolean,
          default: false
     },
});


mudule.exports = model( 'Usuario', UsuarioSchema );