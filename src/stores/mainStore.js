import { observable, action } from 'mobx';

class MainStore {

    @observable
    todos = [{title:'a', isDone: false}, {title:'b', isDone: false}];

    @action
    addTodo(newTodo) {
        this.todos.push(newTodo);
    }

    @action 
    changeNewTodo(todo) {
        todo.isDone = !todo.isDone;
    }


}

const mainStore = new MainStore();

export default mainStore;

