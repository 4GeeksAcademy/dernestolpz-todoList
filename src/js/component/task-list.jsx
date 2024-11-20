import React from 'react';
import { TaskItem } from './task-item';

export const TaskList = ({ tasks, removeTask }) => {
    return (
        <ul className="task-list">
            {tasks.length === 0 ? (
                <li className="no-tasks">No hay tareas, añadir tareas</li>
            ) : (
                tasks.map((task, index) => (
                    <TaskItem key={index} task={task} removeTask={removeTask} />
                ))
            )}
        </ul>
    );
};


