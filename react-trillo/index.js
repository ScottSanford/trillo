const express = require('express')
const db = require('./api/database-connection')
const cookieParser = require('cookie-parser')

db.connect((err) => {
	if (err) {
		console.log('database err', err)
	} else {
		console.log('MySQL Connected...')
	}
})

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use('/auth', require('./api/routes/auth'))

app.listen(5000, () => console.log('server started'))