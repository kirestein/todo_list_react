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

app.put('/todo-list-put', (req, res) => {
    mongo.connect('mongodb://localhost:27017/', (erro, db) => {
        if (erro) throw erro
        var dbo = db.db('todoListDB');
        dbo.collection('todoList').updateOne({tarefa: req.body.oldTodo}, { $set: {tarefa: req.body.newTodo}}, (erro) => {
            if (erro) throw erro
            db.close()
        })
        
    })
    console.log(`A tarefa antiga era ${req.body.oldTodo}`)
    console.log(`A tarefa nova é ${req.body.newTodo}`)
})

module.exports = app;

const mongo = require('mongodb').MongoClient;