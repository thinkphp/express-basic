
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

app.get('/users', user.list);

app.get('/contact', function(req, res){

       res.render('contact', {title: 'Contact'}) 
});

app.get('/about', function(req, res){

       res.render('about', {title: 'About'}) 
});


app.get('/work', function(req, res){

       res.render('work', {title: 'Work'}) 
});

app.get('/writing', function(req, res){

       res.render('writing', {title: 'Writting'}) 
});


http.createServer(app).listen(app.get('port'), function(){

  console.log("Express server listening on port " + app.get('port'));

});
