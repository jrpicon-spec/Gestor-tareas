import React, { useState, useEffect } from 'react';
import { Card, Typography } from 'antd';
import type { Task } from '../interfaces/Task';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { api } from '../services/api';

const { Title } = Typography;

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await api.getTasks();
    setTasks(data);
  };

  const addTask = async (title: string, priority: string) => {
    await api.createTask(title, priority);
    loadTasks();
  };

  const toggleTask = async (id: number) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      await api.updateTask(id, { completed: !task.completed });
      loadTasks();
    }
  };

  const deleteTask = async (id: number) => {
    await api.deleteTask(id);
    loadTasks();
  };

  const pending = tasks.filter(t => !t.completed).length;

  return (
    <div style={{ maxWidth: 700, margin: '0 auto' }}>
      <Title level={2}>Mis Tareas ({pending} pendientes)</Title>

      <TaskForm onAddTask={addTask} />

      <Card>
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </Card>
    </div>
  );
};

export default Tasks;