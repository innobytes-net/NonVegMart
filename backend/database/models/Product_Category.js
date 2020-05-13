const mongoose = require('mongoose');

const productCategorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},

	description: {
		type: String,
		required: true,
	},
});

const productCategory = mongoose.model(
	'productCategory',
	productCategorySchema
);

module.exports = productCategory;
