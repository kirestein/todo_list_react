const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // para retirar a msg de adivertĂȘncia
module.exports = mongoose.connect('mongodb://localhost:27017/todo');