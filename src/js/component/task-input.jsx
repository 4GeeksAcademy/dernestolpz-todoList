import React, { useState } from 'react';

export const TaskInput = ({ addTask }) => {
    const [task, setTask] = useState('');

    const handleChange = (event) => {
        setTask(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && task.trim() !== '') {
            addTask(task);
            setTask('');
        }
    };

    return (
        <div className="task-input">
            <input
                type="text"
                value={task}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Añadir tarea..."
            />
        </div>
    );
};


