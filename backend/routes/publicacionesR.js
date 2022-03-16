
var express = require('express');


const publicacionesMongo = require('../basedeDatos-web/Modelos/publicaciones')

var router = express.Router()

router.post("/publicaciones", (req, res) => {
let publi = publicacionesMongo({
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    texto: req.body.texto,

})
 publi.save().then((dato) => {


 }).catch((e) => res.send(e))


})



router.get('/publicaciones2', (req,res) => {
req.query.titulo;
req.query.descripcion;
req.query.texto;

    publicacionesMongo.find().then((dato) => res.send(dato)).catch((e) => res.send(e))

})
 

module.exports = router