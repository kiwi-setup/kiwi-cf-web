import React, { useEffect, useState } from 'react';
import { Card, Title, Button, Input } from '@kiwiD';
import './Login.scss';
import { useAuthDetails } from '@redux/auth/auth.hook';
import { useNavigate } from 'react-router';

const Login = () => {
  const [form, setForm] = useState({
    username: 'jamesd',
    password: 'jamesdpass',
  });
  const { isUserLoggedIn, postLoginUser } = useAuthDetails();
  const navigate = useNavigate();
  useEffect(() => {
    if (isUserLoggedIn) navigate('/home'); // Redirect to dashboard if user is logged in
  }, [isUserLoggedIn]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert(`Username: ${form.username}\nPassword: ${form.password}`);
    postLoginUser(form);
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
            type='text'
            name='username'
            placeholder='username'
            value={form.username}
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
