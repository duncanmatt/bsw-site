const mongoose = require('mongoose');

const newsletterSchema = mongoose.Schema(
	{
		email: {
			type: String,
			required: [true, 'Please add an email'],
			unique: true,
		},
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model('Newsletter', newsletterSchema);