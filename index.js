const express = require('express');
// import express from "express";
const sharejs = require('share');
// import sharejs from "sharedb";

// import Redis from "redis";
const Redis = require('redis');
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

const port = process.env.PORT || 8000;
const host = 'awesome.redis.server';
const client = Redis.createClient({
    url: `redis://soumyanil:Dassic#007@awesome.redis.server:${port}`,
});

client.on('error', (err) => console.log('Redis Client Error', err));

client.connect();

let options = {
    db: { type: 'redis' },
};

sharejs.server.attach(app, options);

app.listen(port);