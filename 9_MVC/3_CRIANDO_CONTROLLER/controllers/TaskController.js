const Task = require('../models/Task')

module.exports = class TaskController {

    //como estamos invocando esses modulos sem necessariamente instanciar um objeto vamos criar métodos estaticos
    static createTask(req, res) {
        //função view responsavel apenas para criação das tarefas, não envolve models por enquanto
        res.render('tasks/create') 
    }

}