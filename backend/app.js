const express = require('express');

const app = express();

const mongoose = require('./database/mongoose');

app.use(express.json());

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Methods',
		'GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE, TRACE'
	);
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);

	next();
});

app.use('/api/users', require('./api/users'));
app.use('/api/product', require('./api/product'));
app.use('/api/product-category', require('./api/product-category'));
app.use('/api/user-group', require('./api/user-group'));

//login

app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.render('index.ejs', {
		name: 'xyz',
	});
});
app.get('/login', (req, res) => {
	res.render('login.ejs');
});

app.post('/login');

app.get('/register', (req, res) => {
	res.render('register.ejs');
});

app.post('/register', async (req, res) => {
	try {
		const hashPassword = await bcrypt.hash(req.body.password, 10);
		res.redirect('/login');
	} catch {
		res.redirect('/register');
	}
});

app.listen(2000, () => console.log('Server connected on port 2000'));
