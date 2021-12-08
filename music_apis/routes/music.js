const express = require('express');
const musicOperations = require('../controllers/music');
const routes = express.Router();
routes.get('/singer',musicOperations.getByArtist);
routes.get('/allsongs',musicOperations.getAllSongs);
routes.post('/addsong',musicOperations.addASong);
routes.post('/deletesong',musicOperations.deleteASong);
routes.post('/searchsong',musicOperations.searchSong);
module.exports = routes;