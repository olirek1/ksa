const express = require('express');
const route = express.Router();
const services = require('../services/render');

const controller = require('../controller/controller');

route.get('/',services.homeRoutes)

route.get('/nani-song',services.NaniRoutes)

route.get('/deejal-gaadi',services.DeejalRoutes)

route.get('/consultancy',services.consultRoutes)

route.get('/contact',services.contactRoutes)


module.exports = route;
