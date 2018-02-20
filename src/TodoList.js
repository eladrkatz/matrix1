import React from 'react';
import mainStore from './stores/mainStore';
import { observer } from 'mobx-react';


@observer
class TodoList extends React.Component {

    render() {
        return (

            <div className='todo-list'>
                <input type='text' />
                <button >add</button>

               { mainStore.todos.map((t, idx) => (
                    <div key={idx} className='todo-item' style={{background: 'green', color: 'white', marginLeft: '10px' }}>
                        {idx}
                        <input type='checkbox' checked={t.isDone} onChange={() => mainStore.changeNewTodo(t)}/>
                        {t.title}
                    </div>
                )) }
            </div>
    
        );
         
    }
} 

export default TodoList;
