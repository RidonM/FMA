import React from 'react';
import ToDoItem from './toDoItem';

const TheList = ({ tasks, toggleCompleted, updateTask }) => {
    return (
        <>
            <ul id='task-list' className='row-direction'>
                {tasks.map((task, index) => (
                    <ToDoItem
                        key={index}
                        task={task}
                        index={index}
                        toggleCompleted={toggleCompleted}
                        updateTask={updateTask}
                    />
                ))}
            </ul>
        </>
    );
}

export default TheList;