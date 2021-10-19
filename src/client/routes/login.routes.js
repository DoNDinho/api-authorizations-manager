const express = require('express');
const loginService = require('../../business/services/login.service');
const router = express.Router();
const { basePath } = require('../../business/utils/configs/api.config');
const headersValidation = require('../middlewares/validations/headers.validation');
const loginValidation = require('../middlewares/validations/login.validation');

router.post(
	`${basePath}/v1/login`,
	[headersValidation, loginValidation],
	async (req, res, next) => {
		try {
			const transactionId = req.headers['transaction-id'];
			logger.addContext('transaction_id', transactionId);
			const response = await loginService.authenticateAndGetUser(req);
			logger.info({ message: 'Login exitoso', data: response });
			res.json({ data: response });
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
