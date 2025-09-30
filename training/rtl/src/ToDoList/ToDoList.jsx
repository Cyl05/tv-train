import React from 'react';

const ToDoList = ({ todos, onToggle }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => onToggle(todo.id)}
                        />
                        {todo.text}
                    </label>
                </li>
            ))}
        </ul>
    );
}

export default ToDoList;