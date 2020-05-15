const mongoose = require('mongoose');

const usergroupSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},

	description: {
		type: String,
		required: true,
	},
});

const usergroup = mongoose.model('usergroup', usergroupSchema);

module.exports = usergroup;
