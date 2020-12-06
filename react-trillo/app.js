const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.send({
		name: 'Scott Sanford',
		age: 28,
		isAwesome: true
	})
})

app.listen(5000, () => console.log('server started'))