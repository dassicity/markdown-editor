const express = require('express');
const share = require('share');

const redis = require('redis');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
    res.render('pad');
});
app.get('/(:id)', (req, res, next) => {
    res.render('pad');
});

let options = {
    db: { type: 'redis' },
};

share.server.attach(app, options);

const port = process.env.PORT || 8000;
app.listen(port);