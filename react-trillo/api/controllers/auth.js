const db = require('../database-connection')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.register = (req, res) => {
	console.log(req.body)
	
	const { firstName, lastName, email, password, passwordConfirm } = req.body
	
	db.query('SELECT email FROM user WHERE email = ?', [email], async (error, results) => {
		if (error) {
			console.log(error)
		}
		
		if (results.length > 0) {
			res.send({
				status: 'Error',
				message: 'Email is already in use.'
			})
		} else if (password !== passwordConfirm) {
			res.send({
				status: 'Error',
				message: 'Password does not match password confirm.'
			})
		}

		let hashedPassword = await bcrypt.hash(password, 8)
		console.log('hash', hashedPassword)
		
		db.query('INSERT INTO user SET ?', {
			first_name: firstName,
			last_name: lastName,
			email,
			password: hashedPassword
		}, (error, results) => {
			if (error) {
				console.log('Insert error', error)
			}
			console.log('insert result', results)
			res.send({
				status: 'OK',
				message: 'Added new user to the database.'
			})
		})
	})
}

exports.login = async (req, res) => {
	try {
		const { email, password} = req.body
		
		if (!email || !password) {
			return res.status(400).send({
				message: 'Please provide an email & password'
			})
		}
		
		db.query('SELECT * FROM user WHERE email = ?', [email], async (error, results) => {

			if (!results || !(await bcrypt.compare(password, results[0].password)) ) {
				return res.status(401).send({
					message: 'Email or password is incorrect'
				})
			} else {
				const id = results[0].id
				const token = jwt.sign({ id, email }, process.env.JWT_SECRET, {
					expiresIn: process.env.JWT_EXPIRES_IN
				})
				
				const cookieOptions = {
					expires: new Date(
						Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
					),
					httpOnly: true
				}
				
				res.cookie('jwt', token, cookieOptions)
				res.status(200).send({
					status: 200,
					message: 'OK',
					jwt: token
				})
			}
		})
		
	} catch (error) {
		console.log('Login Error:', error)
	}
}