const express = require('express');
const router = express.Router();

const usergroup = require('../database/models/User_Group');

//User group

router.get('/', (req, res) => {
	usergroup
		.find({})
		.then((usergroup) => res.send(usergroup))
		.catch((error) => console.log(error));
});

router.post('/', (req, res) => {
	new usergroup({
		name: req.body.name,
		description: req.body.description,
	})
		.save()
		.then((usergroup) => res.send(usergroup))
		.catch((error) => console.log(error));
});

router.get('/:_userGroupId', (req, res) => {
	usergroup
		.findOne({ _id: req.params._userGroupId })
		.then((usergroup) => res.send(usergroup))
		.catch((error) => console.log(error));
});

router.patch('/:_userGroupId', (req, res) => {
	usergroup
		.findOneAndUpdate(
			{
				_userGroupId: req.params.userGroupId,
			},
			{ $set: req.body }
		)
		.then((usergroup) => res.send(usergroup))
		.catch((error) => console.log(error));
});

router.delete('/:_userGroupId', (req, res) => {
	usergroup
		.findOneAndDelete({
			_userGroupId: req.params.userGroupId,
		})
		.then((usergroup) => res.send(usergroup))
		.catch((error) => console.log(error));
});

module.exports = router;
