const express = require('express');

module.exports = function(server) {

  //API Routes

  const router = express.Router();

  server.use('/', router);

  //Registering API methods in router

  const genreService = require('../itens/genreService');
  genreService.register(router, '/genre');

  const authorService = require('../itens/authorService');
  authorService.register(router, '/author');

  const bookService = require('../itens/bookService');
  bookService.register(router, '/book');

  const bookinstance = require('../itens/bookinstanceService');
  bookinstance.register(router, '/bookinstance');

}