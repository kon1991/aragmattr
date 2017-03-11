var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//and create our instances
var router = express.Router();
var Aragmatiki = require('./models/aragma');
app.use(express.static('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router)
mongoose.connect('mongodb://test:test@ds157839.mlab.com:57839/bears'); 

app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/output/bundle.js', function(req, res){
  res.sendFile(path.join(__dirname + '/output/bundle.js'));
});

router.route('/aragmatikes')

	 .get(function(req, res) {
		 Aragmatiki.find(function(err, aragmatikes) {
		 if (err)
		 res.send(err);
		 //responds with a json object of our database comments.
		 res.json(aragmatikes)
		 });
	})
 //post new comment to the database
	 .post(function(req, res) {
		 var aragmatiki= new Aragmatiki();
		 //body parser lets us use the req.body
		 aragmatiki.name = req.body.name;
		 aragmatiki.location = req.body.location;
		 aragmatiki.save(function(err) {
		 if (err)
		 res.send(err);
		 res.json({ message: 'Aragmatiki successfully added!' });
	 });
 });


app.listen(3000, function(){
  console.log('listening to port:3000');
});
