import React from 'react';
import TodoList from './TodoList';

class FirstPage extends React.Component {
    render () {
    return (
        <div>
            hi

            <TodoList myProperty='elad' todos={[{title: 'todo 1 ', isDone: false}, {title: 'todo 2', isDone: true}]} />
        </div>
        );
    }
}




export default FirstPage;