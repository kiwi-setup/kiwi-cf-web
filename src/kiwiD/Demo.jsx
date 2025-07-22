import React from 'react';
import { Card, Title, Button } from '.';

const Demo = () => (
  <div
    style={{
      padding: '2rem',
      background: '#f7f7f7',
      minHeight: 'calc(100vh - 70px - 50px)',
    }}
  >
    <Title level={2} style={{ marginBottom: '1.5rem' }}>
      KiwiD Design System Demo
    </Title>
    <Card style={{ marginBottom: '2rem' }}>
      <Title level={3} style={{ marginBottom: '1rem' }}>
        Card Component
      </Title>
      <p>This is a simple card. You can put any content here.</p>
      <Button style={{ marginTop: '1rem' }}>Card Action</Button>
    </Card>
    <div style={{ marginBottom: '2rem' }}>
      <Title level={3} style={{ marginBottom: '1rem' }}>
        Title Component
      </Title>
      <Title level={1}>Title Level 1</Title>
      <Title level={2}>Title Level 2</Title>
      <Title level={3}>Title Level 3</Title>
    </div>
    <div>
      <Title level={3} style={{ marginBottom: '1rem' }}>
        Button Component
      </Title>
      <Button>Primary Button</Button>
      <Button style={{ marginLeft: '1rem', background: '#eee', color: '#222' }}>
        Secondary Button
      </Button>
    </div>
  </div>
);

export default Demo;
