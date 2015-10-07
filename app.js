var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(__dirname + '/public'))


app.get('/', function(req, res){
res.send('Hello')
});

app.get('/signup', function(req,res){

	res.sendFile('index.html', {root: './public'});
});

app.post('/formsubmit', function(req, res){

	res.redirect('/success')

});

app.get('/success', function(req,res){
	res.send('Success!!')
});


app.get('/about', function(req, res){
	res.send('All about this site!');
});




var port = 8000
app.listen(port, function(){
	console.log('server is listening on port ' + port)

})