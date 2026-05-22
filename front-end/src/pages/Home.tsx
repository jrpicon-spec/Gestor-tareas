import React from 'react';
import { Card, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  return (
    <div style={{ maxWidth: 600, margin: '40px auto' }}>
      <Card>
        <Title level={2}>Sistema de Gestión de Tareas</Title>
        <Paragraph style={{ color: '#666', marginBottom: 24 }}>
          Organiza tus tareas fácilmente. Agrega prioridades, marca como completadas y ve tu progreso.
        </Paragraph>

        <div style={{ display: 'flex', gap: 12 }}>
          <Link to="/tasks">
            <Button type="primary" size="large">Ir a Tareas</Button>
          </Link>
          <Link to="/stats">
            <Button size="large">Ver Estadísticas</Button>
          </Link>
        </div>
      </Card>

      <Card style={{ marginTop: 20 }}>
        <Title level={4}>Características</Title>
        <ul style={{ margin: 0, paddingLeft: 20, color: '#666' }}>
          <li>Agrega tareas con prioridad</li>
          <li>Marca tareas como completadas</li>
          <li>Guarda automáticamente</li>
        </ul>
      </Card>
    </div>
  );
};

export default Home;