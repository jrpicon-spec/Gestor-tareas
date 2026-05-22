import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const Navbar: React.FC = () => {
  const location = useLocation();

  const items = [
    { key: '/', label: <Link to="/">Inicio</Link> },
    { key: '/tasks', label: <Link to="/tasks">Tareas</Link> },
    { key: '/stats', label: <Link to="/stats">Estadísticas</Link> },
  ];

  return (
    <Header style={{ background: '#fff', padding: '0 20px', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <div style={{ marginRight: 40, fontSize: 18, fontWeight: 600, color: '#333' }}>
          Gestor de Tareas
        </div>
        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={items}
          style={{ border: 'none', background: 'transparent' }}
        />
      </div>
    </Header>
  );
};

export default Navbar;