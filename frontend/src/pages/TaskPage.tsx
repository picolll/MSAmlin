
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setTasks, setTaskOrder } from '../store/tasksSlice';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Task from '../components/Task';

const TaskPage: React.FC = () => {
  const [taskDescription, setTaskDescription] = useState('');
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTasks = async () => {
      if (tasks.length === 0) {
        const response = await axios.get('/tasks');
        setTasks(response.data);
      }
    };

    fetchTasks();

    return () => {
      console.log("Unmounting TaskPage")
      setTasks(tasks) // Redundant as we also save to DB
      handleSaveOrder()
    }
  }, []);
  // }, [dispatch]);

  const handleAddTask = async () => {
    const response = await axios.post('/tasks', { task: taskDescription });
    dispatch(setTasks([...tasks, response.data]));
    setTaskDescription('');
  };

  const handleSaveOrder = async () => {
    await axios.put('/tasks/order', { tasks });
  };

  const moveTask = (dragIndex: number, hoverIndex: number) => {
    const draggedTask = tasks[dragIndex];
    const updatedTasks = [...tasks];
    updatedTasks.splice(dragIndex, 1);
    updatedTasks.splice(hoverIndex, 0, draggedTask);
    dispatch(setTaskOrder(updatedTasks));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h1>Task Manager</h1>
        <input
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="New Task"
        />
        <button onClick={handleAddTask}>Add Task</button>
        <div>
          {tasks.map((task, index) => (
            <Task key={task.id} index={index} task={task} moveTask={moveTask} />
          ))}
        </div>
        <button onClick={handleSaveOrder}>Save Tasks</button>
      </div>
    </DndProvider>
  );
};

export default TaskPage;
