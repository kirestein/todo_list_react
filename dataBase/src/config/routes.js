const express = require('express');

module.exports = (server) => {
    // API Ourtes
    const  router = express.Router();
    server.use('/api', router); // router é midlewear

    //TODO Routes
    const todoService = require('../api/todo/todoService');
    todoService.register(router, '/todos'); // vai utilizar todos os métodos que foram declarados no array de métodos
}
