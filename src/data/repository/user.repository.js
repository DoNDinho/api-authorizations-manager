'use strict';
const ServiceConsumer = require('../services/service-consumer.service');

const getUserbyEmail = async (email, rqHeaders, token) => {
	try {
		const url = `${process.env.API_URL_GET_USER}${email}`;
		const headers = createHeaders(rqHeaders, token);
		return await ServiceConsumer.get({ url, headers });
	} catch (error) {
		logger.error('Error en user repository ', error.code);
		throw {
			httpCode: error.response.status,
			code: error.response.data.code,
			message: error.response.data.message
		};
	}
};

const createHeaders = (rqHeaders, token) => {
	const headers = {};
	headers['transaction-id'] = rqHeaders['transaction-id'];
	headers.timestamp = rqHeaders.timestamp;
	headers.channel = rqHeaders.channel;
	headers.Authorization = `Bearer ${token}`;
	return headers;
};

module.exports = { getUserbyEmail };
