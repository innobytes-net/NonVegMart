const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	order_id: {
		type: mongoose.Types.ObjectId,
		required: true,
    },
    user_id: {
		type: mongoose.Types.ObjectId,
		required: true,
    },
    
	email: {
		type: String,
		unique: true,
		required: true,
	},
	phone: {
		type: String,
		trim: true,
		minlength: 3,
	},

	coupon: {
		type: String,
    },
    
	discount: {
		type: String,
    },
    
    status:{
        type: String,
    },
    created:{
        type: String,
    }
	
});

const order = mongoose.model('order', orderSchema);
module.exports = order;
