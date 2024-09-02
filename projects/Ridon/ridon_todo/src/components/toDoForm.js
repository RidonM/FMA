import React, { useState } from 'react';


const ToDoForm = ({ addTask, filterTasks }) => {
    const [task, setTask] = useState('');
    const [datetime, setDateTime] = useState('');
    const [isImportant, setIsImportant] = useState(false);
    const [color, setColor] = useState('#000000');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() && datetime) {
            addTask({ task, datetime, isImportant, color, isCompleted: false });
            setTask('');
            setDateTime('');
            setIsImportant(false);
            setColor('#000000');
        }
    };

    return (
        <form onSubmit={handleSubmit}
            id="todo-form m-1 p-1">

            <div className="form-group">
                <label for="task">Task</label>
                <input type="text"
                    id="task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter your task..." />
            </div>

            <div className="form-group">
                <label for="datetime">Date and Time</label>
                <input type="datetime-local"
                    value={datetime}
                    onChange={(e) => setDateTime(e.target.value)} />
            </div>

            <div className="row form-group-row">
                <div className="form-group checkbox-wrapper">Important
                    <input
                        type="checkbox"
                        checked={isImportant}
                        onChange={(e) => setIsImportant(e.target.checked)}
                    />
                    <label for="important">
                        <span class="tick_mark"></span>
                    </label>
                </div>

                <div class="form-group">
                    <label for="color">Color</label>
                    <input type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)} />
                </div>

            </div>
            <button type="submit" className="btn btn-primary">ADD NEW TASK</button>
            <div class="button-group">
                <button type="button"
                    className="btn btn-primary-outline btn-all"
                    onClick={() => filterTasks('all')}>All</button>
                <button type="button"
                    className="btn btn-primary-outline btn-all"
                    onClick={() => filterTasks('yesterday')}>Today</button>
                <button type="button"
                    className="btn btn-primary-outline btn-all"
                    onClick={() => filterTasks('today')}
                >Tomorrow</button>
                <button type="button"
                    className="btn btn-primary-outline btn-all"
                    onClick={() => filterTasks('tomorrow')}>Yesterday</button>
            </div>
        </form>
    );
}


export default ToDoForm;