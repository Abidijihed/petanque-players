const router= require("express").Router()
const controller= require('./controller.js')
router.post('/', controller.createUser)
router.get('/',controller.getAll)
router.get('/post',controller.getAllpost)
router.post('/new',controller.createPost)
module.exports.router=router