var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var _ = require('underscore');
var Movie = require('./models/movie');
var User = require('./models/user');
var port =  process.env.PORT || 3000;
var app = express();

mongoose.connect('mongoose://localhost/movie');

app.set('views', './views/pages');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public/libs')))
app.listen(port);

console.log('started on port ' + port);

//index page
app.get('/', function(req, res) {
	Movie.fetch(function(err, movies) {
		if (err) {
			console.log(err)
		}
	}),
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
	var id = req.params.id

	Movie.findById(id, function(err, movie) {
	res.render('detail', {
	    title: 'detail' + movie.title
	    movie: movie
		})
	})
})

//admin page
app.get('/admin/movie', function(req, res) {
	res.render('admin', {
	    title: 'back add list'
	    movie: {
	    	title: '',
	    	doctor: '',
	    	country: '',
	    	year: '',
	    	poster: '',
	    	flash: '',
	    	summary: '',
	    	language: ''
	    }
	})
})

//admin post movie
app.post('/admin/movie/new', function() {
	var id = req.body.movie._id
	var movieObj = req.body.movie
	var _movie
	if (id !== 'undefined') {
		Movie.findById(id, function(err, movie) {
		if (err) {
			console.log(err)
		}

		_movie = _.extend(movie, movieObj)
		_movie.save(function(err, movie) {
		if (err) {console.log(err)}
		res.redirect('/movie/' + movie._id)
		})
	 })
	}
	else {
		_movie = new Movie({
		doctor: movieObj.doctor,
		title: movieObj.title,	
		country: movieObj.country,
		language: movieObj.language,
		year: movieObj.year,
		poster: movieObj.poster,
		summary: movieObj.summary,
		flash: movieObj.flash
		})

		_movie.save(function(err, movie) {
		  if (err) {console.log(err)}
		  res.redirect('/movie/' + movie._id)
		})
	}
})

//list page
app.get('/admin/list', function(req, res) {
	Movie.fetch(function(err, movies) {
	if (err) {
		console.log(err)
	}

	res.render('list', {
	    title: 'list',
	    movies: movies
	 })
	})
})