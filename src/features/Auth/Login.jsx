import React, { useState } from 'react';
import { Card, Title, Button, Input } from '../../kiwiD';
import './Login.scss';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert(`Email: ${form.email}\nPassword: ${form.password}`);
  };

  return (
    <div className='login-container'>
      <Card className='login-card'>
        <Title
          level={2}
          style={{ textAlign: 'center', marginBottom: '1.5rem' }}
        >
          Login
        </Title>
        <form className='login-form' onSubmit={handleSubmit}>
          <Input
            type='email'
            name='email'
            placeholder='Email'
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input
            type='password'
            name='password'
            placeholder='Password'
            value={form.password}
            onChange={handleChange}
            required
          />
          <Button type='submit'>Login</Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
