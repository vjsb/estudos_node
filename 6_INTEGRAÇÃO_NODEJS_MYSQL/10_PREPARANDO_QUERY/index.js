const express = require ('express')
const exphbs = require('express-handlebars')
const pool = require('./db/conn')

const app = express()

//método para conseguir pegar o body como json
app.use(
    express.urlencoded({ extend: true })
)
app.use(express.json())


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})


//rota CREATE
app.post('/books/insertbook', (req, res) => {

    //atributos da tabela ja criada
    const title = req.body.title
    const pageqty = req.body.pageqty
 
    //query para os dados serem inseridos
    //esse formato é mais avançado e do jeito que deve ser feito com querys enviadas para produção
    //usado para evitar SQL INJECTION e deixando a aplicação mais segura
    const sql = 'INSERT INTO books (??, ??) VALUES (?, ?)';
    //aqui são os valores que serão inseridos nos campos com ? acima
    const data = ['title', 'pageqty', title, pageqty];
 
    //pool.query é o comando para inserir a query no banco 
    //o [values] recebe os atributos da tabela e insere na query criada na constante sql
    pool.query(sql, data, function (err)  {
        if (err) {
            console.log(err)
        }
        res.redirect('/')
    })
})

//rota READ (GET)
//rotas assim não precisam ser sanetizadas com ?
app.get("/books", (req, res) => {
    const sql = "SELECT * FROM books"

    pool.query(sql, function (err, data){
        if(err){
            console.log(err)
            return
        }

        //se vier os dados eles vão vir como o data definido na função acima, eu os coloco dentro dessa variavel books para fazer mais sentido
        const books = data;
        console.log(books)

        res.render('books', { books })
    
    })
})

//rota READ com WHERE (GET com WHERE)
app.get("/books/:id", (req, res) => {

    const id = req.params.id;

    const sql = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id', id]

    pool.query(sql, data, function (err, data){
        if(err){
            console.log(err)
            return
        }

        //data[0] porque o WHERE traz uma lista(array) de registros e não só um, com o 0 ele vai retornar só um id que é oque queremos
        const book = data[0]

        res.render('book', { book })
    
    })
})

app.get("/books/edit/:id", (req, res) => {

    const id = req.params.id;

    const sql = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id', id]

        pool.query(sql, function (err, data){
            if(err){
                console.log(err)
                return
            }

            const book = data[0]

            res.render('editbook', { book })

        })
})

//rota para fazer UPDATE de atualização de registro
// o WHERE serve como um filtro, para alterarmos somente o livro do id especificado
//se não usasse o WHERE iria alterar todos
app.post('/books/updatebook', (req, res) => {
    const id = req.body.id
    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`
    const data = ['title', title, 'pageqty', pageqty, 'id', id]

    pool.query(sql, data, function (err){
        if(err){
            console.log(err)
            return
        }

        res.redirect('/books')

    })
})

//rota DELETE para remover um livro usando WHERE para o filtro
app.post('/books/remove/:id', function (req, res) {
    
    const id = req.params.id
  
    const query = `DELETE FROM books WHERE ?? = ?`
    const data = ['id', id]
  
    pool.query(query, data, function (err) {
      if (err) {
        console.log(err)
      }
  
      res.redirect(`/books`)
    })
  })

// com o poolection pool não precisamos mais usar a criação do mysql aqui e importamos direto do arquivo pool na pasta db do projeto, onde la que é iniciado
  app.listen(3000)
