import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth, navigate]);

  // While redirecting, don't render children
  if (!isAuth) {
    return null; // or a loading spinner if you want
  }

  // If authenticated, render children
  return <>{children}</>;
}

export default ProtectedRoute;
