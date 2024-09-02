import React, { useState, useEffect } from 'react';
import ToDoForm from './components/toDoForm';
import TheList from './components/TheList';

import './App.css';
import './assets/css/fma-general.css';
import './assets/css/fma-responsive.css';
import './assets/css/style.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    filterTasks(filter);
  }, [tasks, filter]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleCompleted = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(newTasks);
  };

  const updateTask = (index, updatedTask) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? updatedTask : task
    );
    setTasks(newTasks);
  };

  const filterTasks = (filterType) => {
    setFilter(filterType);
    const today = new Date();
    const yesterday = new Date();
    const tomorrow = new Date();

    yesterday.setDate(today.getDate() - 1);
    tomorrow.setDate(today.getDate() + 1);

    const filtered = tasks.filter((task) => {
      const taskDate = new Date(task.date);
      if (filterType === 'yesterday') {
        return taskDate.toDateString() === yesterday.toDateString();
      } else if (filterType === 'today') {
        return taskDate.toDateString() === today.toDateString();
      } else if (filterType === 'tomorrow') {
        return taskDate.toDateString() === tomorrow.toDateString();
      } else {
        return true;
      }
    });
    setFilteredTasks(filtered);


  };


  return (
    <div className="container-fluid just-center">
      <div className="form-container m-2 p-2">
        <h1>My TODO's</h1>
        <ToDoForm addTask={addTask} />
        <TheList tasks={filteredTasks.length ? filteredTasks : tasks} toggleCompleted={toggleCompleted} updateTask={updateTask} filterTasks={filterTasks} />
      </div>
    </div>
  );

}

export default App;
