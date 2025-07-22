import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/Login/Login';
import Demo from '../kiwiD/Demo';
import Home from '../features/home/Home';
import AuthRoute from './AuthRoute';

const AppRoutes = () => (
  <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/demo' element={<Demo />} />
    <Route element={<AuthRoute />}>
      <Route path='/home' element={<Home />} />
    </Route>
  </Routes>
);

export default AppRoutes;
