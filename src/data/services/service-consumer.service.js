'use strict';
const axios = require('axios');

module.exports = class ServiceConsumer {
	static async post(data) {
		const { url, headers, body } = data;
		const response = await axios.post(url, body, { headers });
		return response.data;
	}

	static async get(data) {
		const { url, headers } = data;
		const response = await axios.get(url, { headers });
		return response.data;
	}
};
