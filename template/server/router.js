const router= require("express").Router()
const controller= require('./controller.js')

router.post('/', controller.createUsers)
router.get('/',controller.getAll)
router.get('/post',controller.getAllpost)
router.post('/new',controller.createPost)
router.post('/login',controller.getUser)
router.post('/admin',controller.createUser)
router.delete('/delete/:id',controller.delete)

module.exports.router=router