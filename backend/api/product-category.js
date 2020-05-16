const express = require('express');
const router = express.Router();

const productCategory = require('../database/models/Product_Category');

//Product Category
router.get('/', (req, res) => {
	productCategory
		.find({})
		.then((productCategory) => res.send(productCategory))
		.catch((error) => console.log(error));
});

router.post('/', (req, res) => {
	new productCategory({
		name: req.body.name,
		description: req.body.description,
	})
		.save()
		.then((productCategory) => res.send(productCategory))
		.catch((error) => console.log(error));
});

router.get('/:category_id', (req, res) => {
	productCategory
		.find({ _id: req.params.category_id })
		.then((productCategory) => res.send(productCategory))
		.catch((error) => console.log(error));
});

router.patch('/:category_id', (req, res) => {
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

router.delete('/:category_id', (req, res) => {
	productCategory
		.findOneAndDelete({
			_id: req.params.category_id,
		})
		.then((productCategory) => res.send(productCategory))
		.catch((error) => console.log(error));
});

module.exports = router;
