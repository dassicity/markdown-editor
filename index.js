const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
    res.render('pad');
});

const port = process.env.PORT || 8000;
app.listen(port);