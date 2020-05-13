const express = require('express');

const app = express();

const mongoose = require('./database/mongoose');

const product = require('./database/models/product');

const productCategory = require('./database/models/Product_Category');

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

//Product Category
app.get('/product-category', (req, res) => {
	productCategory
		.find({})
		.then((productCategory) => res.send(productCategory))
		.catch((error) => console.log(error));
});

app.post('/product-category', (req, res) => {
	new productCategory({
		name: req.body.name,
		description: req.body.description,
	})
		.save()
		.then((productCategory) => res.send(productCategory))
		.catch((error) => console.log(error));
});

app.get('/product-category/:category_id', (req, res) => {
	productCategory
		.find({ _id: req.params.category_id })
		.then((productCategory) => res.send(productCategory))
		.catch((error) => console.log(error));
});

app.patch('/product-category/:category_id', (req, res) => {
	productCategory
		.findOneAndUpdate(
			{
				_id: req.params.category_id,
			},
			{ $set: req.body }
		)
		.then((productCategory) => res.send(productCategory))
		.catch((error) => console.log(error));
});

app.delete('/product-category/:category_id', (req, res) => {
	productCategory
		.findOneAndDelete({
			_id: req.params.category_id,
		})
		.then((productCategory) => res.send(productCategory))
		.catch((error) => console.log(error));
});

// Product

app.get('/product-category/:product_category_id/product', (req, res) => {
	product
		.find({ _Product_Category_id: req.params.product_category_id })
		.then((product) => res.send(product))
		.catch((error) => console.log(error));
});
app.post('/product-category/:product_category_id/product', (req, res) => {
	new product({
		_Product_Category_id: req.params.product_category_id,
		name: req.body.name,
		description: req.body.description,
		cost: req.body.cost,
	})
		.save()
		.then((product) => res.send(product))
		.catch((error) => console.log(error));
});
app.get(
	'/product-category/:product_category_id/product/:product_id',
	(req, res) => {
		product
			.findOne({
				_Product_Category_id: req.params.product_category_id,
				_id: req.params.product_id,
			})
			.then((product) => res.send(product))
			.catch((error) => console.log(error));
	}
);
app.patch(
	'/product-category/:product_category_id/product/:product_id',
	(req, res) => {
		product
			.findOneAndUpdate(
				{
					_Product_Category_id: req.params.product_category_id,
					_id: req.params.product_id,
				},
				{ $set: req.body }
			)
			.then((Product) => res.send(Product))
			.catch((error) => console.log(error));
	}
);
app.delete(
	'/product-category/:product_category_id/product/:product_id',
	(req, res) => {
		product
			.findOneAndDelete({
				_Product_Category_id: req.params.product_category_id,
				_id: req.params.product_id,
			})
			.then((product) => res.send(product))
			.catch((error) => console.log(error));
	}
);

app.listen(2000, () => console.log('Server connected on port 2000'));
