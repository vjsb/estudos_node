const express = require('express')
const router = express.Router()

const taskController = require('../controllers/TaskController')

//metodos criado la no controller e chamado aqui
router.get('/add', taskController.createTask) 
router.post('/add', taskController.createTaskSave) 
router.post('/remove', taskController.removeTask)
router.get('/', taskController.showTasks)

module.exports = router