const express = require('express');
const app = express();
var tarefa

app.post('/todo-list', (req) => {
    var tarefa = req.body.tarefa
    mongo.connect('mongodb://localhost:27017/', (erro, db) => {
        if (erro) throw erro
        var dbo = db.db('todoListDB');
        var obj = {tarefa: tarefa}
        dbo.collection('todoList').insertOne(obj, (error) => {
            if (error) throw error
            db.close();
        })
    })
});

app.get('/todo-list-res', (req, res) => {
    mongo.connect('mongodb://localhost:27017/', (erro, db) => {
        if (erro) throw erro
        var dbo = db.db('todoListDB');
        dbo.collection('todoList').find((erro, result) => {
            if(erro) throw erro
            res.send(result)
        })
        
    })
})

module.exports = app;

const mongo = require('mongodb').MongoClient;