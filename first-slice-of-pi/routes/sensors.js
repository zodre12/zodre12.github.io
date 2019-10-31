	var express = require('express'),
	var sensorRoutes = require('./..routes/sensors');
	router = express.Router(),
	resources = require('./../resources/model');
	
	router.route('/').get(function(req, res, next) {
	res.send(resources.pi.sensors);
});
	router.route('/dht').get(function(req, res, next) {
	res.send(resources.pi.sensors.dht);
});
	router.route('dht/temperature').get(function(req, res, next){
	res.send(resources.pi.sensors.temperature);
});
	router.route('dht/humidity').get(function(req, res, next){
	res.send(resources.pi.sensors.humidity);
});
	router.route('/pir').get(function(req, res, next){
	res,send(resources.pi.sensors.pir);
});
	


module.exports = router;
