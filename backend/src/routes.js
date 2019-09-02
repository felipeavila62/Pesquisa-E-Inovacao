const express = require('express');
const ProfController = require('./controllers/ProfController');

const routes = express.Router();


routes.get('/profs', ProfController.index);
routes.post('/profs', ProfController.store);
// routes.get('/profs/:id', ProfController.show);


module.exports = routes;


