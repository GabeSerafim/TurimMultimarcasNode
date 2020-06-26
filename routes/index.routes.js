const express = require('express')
const router = express.Router();
const carro = require('./carro.routes')

router.use('/carro',carro);

module.exports = router;