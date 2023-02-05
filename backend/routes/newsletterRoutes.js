const express = require('express');
const router = express.Router();
const {subscribeToNewsletter} = require('../controllers/newsletterController');

router.post('/', subscribeToNewsletter);

module.exports = router;
