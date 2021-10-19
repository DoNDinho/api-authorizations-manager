'use strict';
const loginRepository = require('../../data/repository/login.repository');
const userRepository = require('../../data/repository/user.repository');
const loginConverter = require('../converter/login.converter');

const authenticateAndGetUser = async (data) => {
	try {
		const { headers, body } = data;
		const loginResponse = await login(headers, body);
		const userResponse = await getUserbyEmail(body.data.username, headers, loginResponse.token);
		return loginConverter.parseLoginResponse(loginResponse, userResponse.data);
	} catch (error) {
		throw error;
	}
};

const login = async (headers, body) => {
	try {
		const loginResponse = await loginRepository.login(body, headers);
		return loginResponse;
	} catch (error) {
		throw error;
	}
};

const getUserbyEmail = async (email, headers, token) => {
	try {
		const userResponse = await userRepository.getUserbyEmail(email, headers, token);
		return userResponse;
	} catch (error) {
		throw error;
	}
};

module.exports = { authenticateAndGetUser };
