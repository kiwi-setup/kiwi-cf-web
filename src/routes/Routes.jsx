import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Login from './../features/Auth/Login.jsx';
import Demo from '@kiwiD/Demo';
import Home from '../features/home/Home';
import AuthRoute from './AuthRoute';

const AppRoutes = () => (
  <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/demo' element={<Demo />} />
    <Route element={<AuthRoute />}>
      <Route path='/' element={<Home />} />
    </Route>
    <Route path='*' element={<Navigate to='/' replace />} />
  </Routes>
);

export default AppRoutes;
