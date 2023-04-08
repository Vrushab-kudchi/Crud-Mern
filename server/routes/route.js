const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.post('/register', userController.register);

router.get('/user', userController.getuser);

router.delete('/delete/:id', userController.deleteuser);

router.patch('/update/:id' ,userController.edituser)

module.exports = router;
