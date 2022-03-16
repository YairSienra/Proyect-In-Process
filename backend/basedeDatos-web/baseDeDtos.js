const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/baseDeDtos')
.then( function (dato ) {

    console.log("Estoy en tu base de datos");

})
.catch((e) => console.log(e))