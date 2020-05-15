const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
<<<<<<< HEAD
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
=======
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
>>>>>>> 28605d36c5ae5a32c1cf9b2cb46dd0c0a510635a
