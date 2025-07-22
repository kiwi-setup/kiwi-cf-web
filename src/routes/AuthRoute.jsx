import React from 'react';
import { Navigate, Outlet } from 'react-router';

// Replace this with your actual authentication logic
const isAuthenticated = () => {
  // Example: check for a token in localStorage
  return Boolean(localStorage.getItem('authToken'));
};

const AuthRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to='/login' replace />;
};

export default AuthRoute;
