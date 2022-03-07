const server = require('./config/server');
require('./config/dataBase');
require('./config/routes')(server);