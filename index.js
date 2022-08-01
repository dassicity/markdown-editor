const express = require('express');
const sharejs = require('share');

require('redis');
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

sharejs.server.attach(app, options);

const port = process.env.PORT || 8000;
app.listen(port);