const mysql = require('mysql')
const dotenv = require('dotenv')

dotenv.config({ path: './.env' })

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

module.exports = connection