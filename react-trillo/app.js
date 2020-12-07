const express = require('express')
const mysql = require('mysql')
const dotenv = require('dotenv')

dotenv.config({
	path: './.env'
})

const {
	DATABASE_HOST,
	DATABASE_USER,
	DATABASE_PASSWORD,
	DATABASE
} = process.env

const connection = mysql.createConnection({
	host: DATABASE_HOST,
	user: DATABASE_USER,
	password: DATABASE_PASSWORD,
	database: DATABASE
})

connection.connect((err) => {
	if (err) {
		console.log('database err', err)
	} else {
		console.log('MySQL Connected...')
	}
})

const app = express()

app.get('/', (req, res) => {
	res.send({
		name: 'Scott Sanford',
		age: 28,
		isAwesome: true
	})
})

app.listen(5000, () => console.log('server started'))