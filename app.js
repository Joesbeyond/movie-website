var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var Movie = require('./models/movie');
var User = require('./models/user');
var port =  process.env.PORT || 3000;
var app = express();

mongoose.connect('mongoose://localhost/movie-website');

app.set('views', './views/pages');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public/libs')))
app.listen(port);

console.log('started on port ' + port);

//index page
app.get('/', function(req, res) {
	res.render('index', {
	    title: 'Home'
	})
})

//signup
app.post('./user/signup', function(req, res) {
	var user = req.body.user
	console.log(user);

})



//detail page 
app.get('/movie/:id', function(req, res) {
	res.render('detail', {
	    title: 'detail'
	})
})

//admin page
app.get('/admin/movie', function(req, res) {
	res.render('admin', {
	    title: 'admin'
	})
})

//list page
app.get('/admin/list', function(req, res) {
	res.render('list', {
	    title: 'list'
	})
})