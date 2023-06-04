import React, { useState } from 'react';

const initialData = {
  tasks: [
    { id: 'task-1', content: 'Take out the garbage' },
    { id: 'task-2', content: 'Watch TV' }
  ]
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialData.tasks);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('taskIndex', index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    const dragIndex = e.dataTransfer.getData('taskIndex');
    const dragTask = tasks[dragIndex];
    const remainingTasks = tasks.filter((task, i) => i !== parseInt(dragIndex));
    const updatedTasks = [
      ...remainingTasks.slice(0, index),
      dragTask,
      ...remainingTasks.slice(index)
    ];
    setTasks(updatedTasks);
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <div
          key={task.id}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
          style={{
            border: '1px solid black',
            padding: '10px',
            margin: '10px',
            userSelect: 'none',
            cursor: 'move'
          }}
        >
          {task.content}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;