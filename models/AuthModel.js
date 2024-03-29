// Require mongoose library for MongoDB
const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
			index: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);


const userModel = mongoose.model('blogUser', userSchema);

module.exports = userModel;
