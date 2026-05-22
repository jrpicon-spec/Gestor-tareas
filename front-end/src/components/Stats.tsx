import React from 'react';
import { Row, Col, Card, Statistic } from 'antd';

interface StatsProps {
  total: number;
  completed: number;
  pending: number;
}

const Stats: React.FC<StatsProps> = ({ total, completed, pending }) => {
  return (
    <Row gutter={16}>
      <Col span={8}>
        <Card>
          <Statistic title="Total" value={total} />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic title="Completadas" value={completed} valueStyle={{ color: '#52c41a' }} />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic title="Pendientes" value={pending} valueStyle={{ color: '#fa8c16' }} />
        </Card>
      </Col>
    </Row>
  );
};

export default Stats;