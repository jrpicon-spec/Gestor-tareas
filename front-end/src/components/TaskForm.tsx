import React, { useState } from 'react';
import { Card, Input, Select, Button, Space } from 'antd';

interface TaskFormProps {
  onAddTask: (title: string, priority: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Media');

  const handleSubmit = () => {
    if (!title.trim()) return;
    onAddTask(title.trim(), priority);
    setTitle('');
    setPriority('Media');
  };

  return (
    <Card style={{ marginBottom: 20 }}>
      <Space.Compact style={{ width: '100%' }}>
        <Input
          placeholder="Nueva tarea..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onPressEnter={handleSubmit}
          size="large"
        />
        <Select
          value={priority}
          onChange={setPriority}
          style={{ width: 120 }}
          size="large"
        >
          <Select.Option value="Alta">Alta</Select.Option>
          <Select.Option value="Media">Media</Select.Option>
          <Select.Option value="Baja">Baja</Select.Option>
        </Select>
        <Button type="primary" onClick={handleSubmit} size="large">
          Agregar
        </Button>
      </Space.Compact>
    </Card>
  );
};

export default TaskForm;