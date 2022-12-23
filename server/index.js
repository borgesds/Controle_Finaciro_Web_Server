const { application } = require('express')
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'lostawer7',
    database: 'financas',
})

app.use(cors())
app.use(express.json())

// Mandar para o banco de dados
app.post('/register', (req, res) => {
    const { desc } = req.body
    const { amount } = req.body
    const { datetime } = req.body
    const { radioclick } = req.body

    let SQL = "INSERT INTO financa (descricao, valor, data_cadastro, saida_entrada) VALUES ( ?, ?, ?, ?)"

    db.query(SQL, [desc, amount, datetime, radioclick], (err, result) => {
        console.log(err)
    })
})

app.get('/getdata', (req, res) => {

    let SQL = "SELECT * FROM financa"

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

// entrada - income
app.get('/getincome', (req, res) => {

    let SQL = "SELECT sum(f.valor) as 'valor' FROM financa f WHERE f.saida_entrada = 1"

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

// saida - exit
app.get('/getexit', (req, res) => {

    let SQL = "SELECT sum(f.valor) as 'valor' FROM financa f WHERE f.saida_entrada = 0"

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

app.delete('/delete/:id', (req, res) => {
    const {id} = req.params

    let SQL = "DELETE FROM financa WHERE id = ?"
    db.query(SQL, [id], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

app.listen(3000, () => {
    console.log(
        'Rodando servidor na porta: http://localhost:3000'
    )
})