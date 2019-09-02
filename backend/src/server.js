const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://JoaoVinicius:qazxsw123@cluster0-1elvl.mongodb.net/LinxPlayDB?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(express.json());
server.use(routes);

server.listen(3333);