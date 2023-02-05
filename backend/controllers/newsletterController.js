const asyncHandler = require('express-async-handler');

const Newsletter = require('../models/newsletterModel');

const subscribeToNewsletter = asyncHandler(async (req, res) => {
	const { email } = req.body;

	// Validation
	if (!email) {
		res.status(400);
		throw new Error('Please enter a valid email address');
	}

	// Find if user already exists
	const sub = await Newsletter.findById(req.params.id);

	if (sub) {
		res.status(400);
		throw new Error("You're already registered with that address");
	}

	// Create email object
	const subscription = await Newsletter.create({
		email,
	});

	res.status(201).json(subscription);
});

module.exports = {
	subscribeToNewsletter,
};
