const express = require('express');
const router = express.Router();

const userSchema = require('../database/models/User_Schemas');

// Users
router.get('/', (req, res) => {
	userSchema
		.find({})
		.then((userSchema) => res.send(userSchema))
		.catch((error) => console.log(error));
});

router.get('/:user_id', (req, res) => {
	userSchema
		.find({ _id: req.params.user_id })
		.then((userSchema) => res.send(userSchema))
		.catch((error) => console.log(error));
});

router.post('/', (req, res) => {
	new userSchema({
		firstName: req.body.firstname,
		lastName: req.body.lastname,
		email: req.body.email,
		password: req.body.password,
		_userGroupId: req.body.userGroupId,
	})
		.save()
		.then((userSchema) => res.send(userSchema))
		.catch((error) => console.log(error));
});

router.patch('/:user_id', (req, res) => {
	userSchema
		.findOneAndUpdate(
			{
				_id: req.params.user_id,
			},
			{ $set: req.body }
		)
		.then((userSchema) => res.send(userSchema))
		.catch((error) => console.log(error));
});
router.delete('/:user_id', (req, res) => {
	userSchema
		.findOneAndDelete({
			_id: req.params.user_id,
		})
		.then((userSchema) => res.send(userSchema))
		.catch((error) => console.log(error));
});

module.exports = router;
