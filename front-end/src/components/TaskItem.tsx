import React from 'react';
import { Card, Tag, Button, Space } from 'antd';
import type { Task } from '../interfaces/Task';

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  const getPriorityColor = (priority: string) => {
    if (priority === 'Alta') return 'red';
    if (priority === 'Media') return 'orange';
    return 'green';
  };

  return (
    <Card
      size="small"
      style={{
        marginBottom: 10,
        background: task.completed ? '#fafafa' : '#fff',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Space>
          <Button
            size="small"
            onClick={() => onToggle(task.id)}
            type={task.completed ? 'primary' : 'default'}
          >
            {task.completed ? '✔' : '○'}
          </Button>
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? '#999' : '#333',
            }}
          >
            {task.title}
          </span>
          <Tag color={getPriorityColor(task.priority)}>{task.priority}</Tag>
        </Space>
        <Button size="small" danger onClick={() => onDelete(task.id)}>
          Eliminar
        </Button>
      </div>
    </Card>
  );
};

export default TaskItem;