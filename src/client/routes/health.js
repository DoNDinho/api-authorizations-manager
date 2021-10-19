const express = require('express')
const router = express.Router()
const { basePath } = require('../../business/utils/configs/api.config')
const { version } = require('../../../package.json')

router.get(`${basePath}/v1/healthcheck`, (req, res) => {
	logger.info('La API Authentications se encuentra disponible')
	res.json({
		status: 'API Authentications is up',
		version,
		date: new Date().toString(),
		uptime: process.uptime()
	})
})

module.exports = router
