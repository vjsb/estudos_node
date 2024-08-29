const express = require ('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

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
    const sql = 'INSERT INTO books (title, pageqty) VALUES (?)';
    //aqui são os valores que serão inseridos no campo VALUES acima
    const values = [title, pageqty];
 
    //conn.query é o comando para inserir a query no banco 
    //o [values] recebe os atributos da tabela e insere na query criada na constante sql
    conn.query(sql, [values], function (err)  {
        if (err) {
            console.log(err)
        }
        res.redirect('/')
    })
})

//rota READ
app.get("/books", (req, res) => {
    const sql = "SELECT * FROM books"

    conn.query(sql, function (err, data){
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

//criando conexão com o mysql
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

conn.connect(function (err){

    if(err){
        console.log(err)
    }

    console.log("Conectado com sucesso ao MySQL.")

    app.listen(3000)

})
