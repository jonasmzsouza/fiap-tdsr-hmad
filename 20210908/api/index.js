const jwt = require('jsonwebtoken')
const JWT_SENHA = 'MQuqBaS#y1W#&WbcmYr4BnwJ@zXZgj'
const express = require('express')
const app = express()

app.use(express.json())

const usuarios = [
    {
        usuario : 'jose',
        senha : 'jose',
        admin : false
    },
    {
        usuario : 'maria',
        senha : 'maria',
        admin : true
    }    
]

const livros = []

app.post('/login', (req, res) => {
    try {
        const { usuario, senha } = req.body
        const user = usuarios.find((item) => {
            return ( item.usuario === usuario && item.senha === senha)
        })

        if ( user) {
            // Retornar um token confirmando a autencidade desse usuário
            const token = jwt.sign({
                usuario : usuario,
                admin : user.admin
            }, JWT_SENHA)
            res.json({ token })
        } else {
            res.sendStatus(404)
        }
        
    } catch (error) {
        res.sendStatus(404)
    }
})

app.get('/usuarios', (req, res) => {
    try {
        const token = req.headers.authorization.replace('Bearer ', '')
        const decoded = jwt.verify(token, JWT_SENHA)

        if  ( ! decoded.admin ) {
            res.sendStatus(403)
        } else {
            res.json(usuarios)
        }
    } catch (error) {
        res.sendStatus(401)
    }
})

app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000')
})