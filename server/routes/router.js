const express = require('express');
const route = express.Router();
const services = require('../services/render');

const controller = require('../controller/controller');

route.get('/',services.homeRoutes)
route.get('/music',services.musicRoutes)

route.get('/nani-song',services.NaniRoutes)

route.get('/deejal-gaadi',services.DeejalRoutes)

route.get('/photos',services.photoRoutes)

route.get('/contact',services.contactRoutes)


module.exports = route;
