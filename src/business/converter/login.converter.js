'use strict';
const parseLoginResponse = (loginResponse, userResponse) => {
	return {
		authorization: {
			token: loginResponse.token
		},
		...userResponse
	};
};

module.exports = { parseLoginResponse };
