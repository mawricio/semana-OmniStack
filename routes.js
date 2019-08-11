const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');


const routes = express.Router();

//"INSERT INTO tabela VALUES"
//routes.get('/', (req, res) => {
//  return res.json({message: `Olá ${req.query.name}`});
//}); 
//post  = sempre criar
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store); //teoricametne cai chamar nosso

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);
module.exports = routes;
