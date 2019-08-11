const express = require('express');

const routes = require('./routes'); //sempre tem que pe
//criar sevidor
const server = express();
//get(ex. ), post(ex. formulario), put, delete
//server.get('/', (req, res) => {
  //return res.send('Hello World')
  //return res.json({message: `Olá ${req.query.name}`});
//}); 
const mongose = require('mongoose');

const cors = require('cors');

mongose.connect('mongodb+srv://mauricerj:mos134213@cluster0-21sj3.mongodb.net/omnistack8?retryWrites=true&w=majority',{
  useNewUrlParser: true
});

server.use(cors());

server.use(express.json()) // express, vou usar json

server.use(routes);

server.listen(3333);