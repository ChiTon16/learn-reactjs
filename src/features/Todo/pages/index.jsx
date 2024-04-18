import React, { useState } from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Code',
            status: 'new',
        },
    ];

    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState('all');

    const handleTodoClick = (todo, idx) => {
        // clone current array to the new one
        const newTodoList = [...todoList];

        console.log(todo, idx);
        // toggle state
        const newTodo = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };
        newTodoList[idx] = newTodo;

        // update todo list
        setTodoList(newTodoList)
    }

    const handleShowAllClick = () => {
        setFilterStatus('all');
    }

    const handleShowCompletedClick = () => {
        setFilterStatus('completed');
    }

    const handleShowNewClick = () => {
        setFilterStatus('new');
    }

    const renderedTodoList = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);
    // console.log(renderedTodoList);

    const handleTodoFormSubmit = (values) => {
        console.log('Form submit: ', values);
    }

    return (
        <div>
            <h3>What to do</h3>
            <TodoForm onsubmit={handleTodoFormSubmit} />

            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );

}

export default TodoFeature;