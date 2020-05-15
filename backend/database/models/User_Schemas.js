const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	_userGroupId: {
		type: mongoose.Types.ObjectId,
		required: true,
	},
	FirstName: {
		type: String,
		trim: true,
		required: true,
	},
	LastName: {
		type: String,
		trim: true,
		required: true,
	},
	Email: {
		type: String,
		unique: true,
		required: true,
	},
	Password: {

		type: String,
		required: true,
	}
});

const user = mongoose.model('user', userSchema);
module.exports = user;
