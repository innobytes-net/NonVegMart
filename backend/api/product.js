const express = require('express');
const router = express.Router();

const product = require('../database/models/Product');

// Product

router.get('/', (req, res) => {
	product
		.find({})
		.then((product) => res.send(product))
		.catch((error) => console.log(error));
});
router.get('/:product_id', (req, res) => {
	product
		.findOne({
			_Product_Category_id: req.body.product_category_id,
			_id: req.params.product_id,
		})
		.then((product) => res.send(product))
		.catch((error) => console.log(error));
});
router.post('/', (req, res) => {
	new product({
		_Product_Category_id: req.body.product_category_id,
		name: req.body.name,
		description: req.body.description,
		cost: req.body.cost,
	})
		.save()
		.then((product) => res.send(product))
		.catch((error) => console.log(error));
});

router.patch('/:product_id', (req, res) => {
	product
		.findOneAndUpdate(
			{
				_id: req.params.product_id,
			},
			{ $set: req.body }
		)
		.then((Product) => res.send(Product))
		.catch((error) => console.log(error));
});
router.delete('/:product_id', (req, res) => {
	product
		.findOneAndDelete({
			_id: req.params.product_id,
		})
		.then((product) => res.send(product))
		.catch((error) => console.log(error));
});

module.exports = router;
