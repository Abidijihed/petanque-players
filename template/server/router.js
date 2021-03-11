const router= require("express").Router()
const controller= require('./controller.js')
router.post('/', controller.createUser)
router.get('/',controller.getAll)
module.exports.router=router