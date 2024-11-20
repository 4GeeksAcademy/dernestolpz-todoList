import React, { useState } from 'react';
import { TaskInput } from './task-input';
import { TaskList } from './task-list';

const Home = () => {
	const [tasks, setTasks] = useState([]);

	const addTask = (task) => {
		setTasks([...tasks, task]);
	};

	const removeTask = (taskToRemove) => {
		setTasks(tasks.filter((task) => task !== taskToRemove));
	};

	return (
		<div className="toDoList">
			<h1>TO DO LIST</h1>
			<TaskInput addTask={addTask} />
			<TaskList tasks={tasks} removeTask={removeTask} />
			<p>Hay {tasks.length} tareas por hacer</p>
		</div>
	);
};

export default Home;
