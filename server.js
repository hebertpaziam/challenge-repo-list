// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var proxy = require('express-http-proxy');

// configuration ===========================================

var port = process.env.PORT || 4200;

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/dist'));
app.use('/github.com', proxy('https://github.com'));
app.use('/api.github.com', proxy('https://api.github.com'));

/* GET home page. */
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html'); // load our public/index.html file
});

app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;
