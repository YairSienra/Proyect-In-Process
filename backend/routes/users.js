var express = require('express');

var router = express.Router();


router.get('/login', (req, res) => {

    if (req.query.user === "lore" && req.query.pass === "osores" || req.query.user === "romina" && req.query.pass === "romano")  {

       res.send(true)
     
    } else {

        res.send(false)
    }
})
module.exports = router


