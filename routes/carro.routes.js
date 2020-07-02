const express = require('express')
const {body, check} = require('express-validator')
const router = express.Router();
const controller = require('../controllers/carro')
const server = require('../server')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, callBack) =>{
        callBack(null,'assets')
    },
    filename: (req, file, callBack) =>{
        console.log(req);
        callBack(null, file.fieldname+`-ID-`+file.originalname)
    }
})

const upload = multer({storage:storage})

router.get('/',controller.getAll);
router.get('/:id', controller.getById);
router.get('/search/:titulo', controller.getByName);
router.post('/image',upload.single('file'), controller.addImage)
router.post('/', controller.addCarro);
router.put('/', controller.putCarro);
router.delete('/:id', controller.delCarro);

module.exports = router;