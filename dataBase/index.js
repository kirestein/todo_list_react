const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routs = require('./routs')


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
app.use('/', routs);
