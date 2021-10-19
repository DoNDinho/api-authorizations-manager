'use strict';
const ServiceConsumer = require('../services/service-consumer.service');

const login = async (body, rqHeaders) => {
	try {
		const url = process.env.API_URL_LOGIN;
		const headers = createHeaders(rqHeaders);
		return await ServiceConsumer.post({ url, headers, body });
	} catch (error) {
		logger.error('Error en login repository ', error.code);
		throw {
			httpCode: error.response.status,
			code: error.response.data.code,
			message: error.response.data.message
		};
	}
};

const createHeaders = (rqHeaders) => {
	const headers = {};
	headers['transaction-id'] = rqHeaders['transaction-id'];
	headers.timestamp = rqHeaders.timestamp;
	headers.channel = rqHeaders.channel;
	return headers;
};

module.exports = { login };
