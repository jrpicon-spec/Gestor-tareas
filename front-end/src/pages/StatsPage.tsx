import React, { useState, useEffect } from 'react';
import { Card, Typography } from 'antd';
import type{ Task } from '../interfaces/Task';
import Stats from '../components/Stats';
import { api } from '../services/api';

const { Title } = Typography;

const StatsPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await api.getTasks();
    setTasks(data);
  };

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  return (
    <div style={{ maxWidth: 700, margin: '0 auto' }}>
      <Title level={2}>Estadísticas</Title>

      <Stats total={total} completed={completed} pending={pending} />

      <Card style={{ marginTop: 20 }}>
        <p>
          {total === 0
            ? 'Comienza a agregar tareas'
            : completed === total
            ? '¡Felicidades! Has completado todas tus tareas'
            : `Tienes ${pending} tarea${pending !== 1 ? 's' : ''} pendiente${pending !== 1 ? 's' : ''}`}
        </p>
      </Card>
    </div>
  );
};

export default StatsPage;