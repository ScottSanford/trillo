const express = require('express')
const Authentication = require('../controllers/auth')

const app = express()

app.post('/register', Authentication.register)
app.post('/login', Authentication.login)

module.exports = app