import React, { useState } from 'react';

export const TaskItem = ({ task, removeTask }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <li
            className="task-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {task}
            {isHovered && (
                <span className="delete-icon" onClick={() => removeTask(task)}>
                    ×
                </span>
            )}
        </li>
    );
};


