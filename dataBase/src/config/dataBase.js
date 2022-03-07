const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // para retirar a msg de adivertência
module.exports = mongoose.connect('mongodb://localhost:27017/todo');