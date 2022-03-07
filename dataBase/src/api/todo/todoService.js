const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete']); // criando a api rest padrão com os métodos do CRUD
Todo.updateOptions({ new: true, runValidators: true }); // quero que retorne o registro atualizado e valide as atualizações

module.exports = Todo