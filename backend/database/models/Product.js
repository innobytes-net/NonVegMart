const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	_Product_Category_id: {
		type: mongoose.Types.ObjectId,
		required: true,
	},
	name: {
		type: String,
		trim: true,
		minlength: 3,
	},

	description: {
		type: String,
		required: true,
	},
	cost: {
		type: String,
		required: true,
	},
	// Completed:{
	//   type: Boolean,
	//   required:true,
	//   default: false,
	// }
});

const product = mongoose.model('product', productSchema);
module.exports = product;
