var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use('/static', express.static('./assets'));

app.get('/login', function(req, res) {
	res.render('panel');
});

app.get('/auth/google', function(req, res) {
	res.render('user', {
		user: {
			firstName: "John",
			lastName: "Rambo",
			age: 36,
			selfie: "https://oldschoolcontemporary.files.wordpress.com/2016/12/john-rambo.jpg?w=640"
		}
	});
});

app.listen(3000);
app.use(function(req, res, next) {
	res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!');
});