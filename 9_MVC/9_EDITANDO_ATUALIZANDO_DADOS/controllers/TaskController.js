const Task = require('../models/Task')

module.exports = class TaskController {

    //como estamos invocando esses modulos sem necessariamente instanciar um objeto vamos criar métodos estaticos
    static createTask(req, res) {
        //função view responsavel apenas para criação das tarefas, não envolve models por enquanto
        res.render('tasks/create') 
    }

    //como tem interação com o banco de dados vai ser async para conseguirmos esperar a aoperação nele
    //metodo para salvar uma Task
    static async createTaskSave(req, res) {

        //cria um objeto para que consiga salvar as informações
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }

        await Task.create(task)

        res.redirect('/tasks')

    }

    static async removeTask(req, res) {

        const id = req.body.id

        //filtro criado para remover a Task de determinado id
        await Task.destroy({where: { id: id } })

        res.redirect('/tasks')

    }

    //metodo para editar os dados
    static async updateTask(req, res) {

        const id = req.params.id

        //como queremos apenas um registro usamos o findOne
        const task = await Task.findOne({where: { id: id }, raw: true })

        res.render('tasks/edit', { task })

    }

    //metodo para envio dos dados editados
    static async updateTaskPost(req, res) {

        const id = req.body.id

        const task = {
            title: req.body.title,
            description: req.body.description
        }

        //update para atualizar os dados do body para edição dos dados
        await Task.update(task, {where: { id: id } })

        res.redirect('/tasks')

    }

    static async showTasks(req, res) {

        const tasks = await Task.findAll({raw: true})

        //função view responsavel apenas por mostrar tudo na rota /tasks (home)
        res.render('tasks/all', {tasks}) 
    }

}