const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
    res.render('pad');
});

const port = process.env.PORT || 3000;
app.listen(port);