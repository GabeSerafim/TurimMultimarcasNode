const express = require('express')
const {body, check} = require('express-validator')
const router = express.Router();
const controller = require('../controllers/carro')

router.get('/',controller.getAll);
router.get('/:id', controller.getById);
router.get('/search/:titulo', controller.getByName);
router.post('/image', controller.addImage)
router.post('/', controller.addCarro);
router.put('/', controller.putCarro);
router.delete('/:id', controller.delCarro);

module.exports = router;