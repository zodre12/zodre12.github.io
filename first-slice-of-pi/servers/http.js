var actuatorsRoutes = require ('./../routes/actuators');
var express = require('express'),
	cors = require('cors');
var app = express();

app.use(cors());
	
app.use('/pi/sensors', sensorRoutes);
app.get('/pi', function(req, res){
    res.send('Hi guys');
});
app.get('/', function(req, res){
	res.send('welcome to box.exc');
});

module.exports = app;
