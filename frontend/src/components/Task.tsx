import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

interface TaskProps {
  task: { id: number; description: string };
  index: number;
  moveTask: (dragIndex: number, hoverIndex: number) => void;
}

const Task: React.FC<TaskProps> = ({ task, index, moveTask }) => {
  const [, ref] = useDrag({
    type: 'TASK',
    item: { index },
  });

  const [, drop] = useDrop({
    accept: 'TASK',
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveTask(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} style={{ padding: '8px', border: '1px solid #000', margin: '4px 0' }}>
      {task.description}
    </div>
  );
};

export default Task;
