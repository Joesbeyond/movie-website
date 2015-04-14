var express = require('express');
var port =  process.env.PORT || 3000;
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.listen(port);

console.log('started on port ' + port);

//index page
app.get('/', function(req, res) {
	res.render('index', {
	    title: 'Home'
	})
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