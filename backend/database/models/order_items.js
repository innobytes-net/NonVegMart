const mongoose = require('mongoose');

const orderitemsSchema = new mongoose.Schema({
	order_id: {
		type: mongoose.Types.ObjectId,
		required: true,
    },
    product_id: {
		type: mongoose.Types.ObjectId,
		required: true,
    },
    
    
    quantity:{
        type: String,
        required:true,
    },
	
});

const orderitems = mongoose.model('orderitems', orderitemsSchema);
module.exports = orderitems;
