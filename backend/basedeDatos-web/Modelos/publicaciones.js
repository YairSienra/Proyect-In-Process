const Mongoose = require("mongoose");

let publi = new Mongoose.Schema({
    titulo : String,
    descripcion: String,
    texto : String
}) 

module.exports = Mongoose.model('publicaciones', publi)