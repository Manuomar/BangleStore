import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function LoginBtn() {
  const { isAuth, setisAuth } = useAuth();
  const navigate = useNavigate();

  function logout() {
    setisAuth(false);
    navigate('/');
  }

  function login() {
    navigate('/login');
  }

  return (
    <div>
      {isAuth ? (
        <button
          onClick={logout}
          className="bg-blue-600 text-white font-bold rounded-xl p-2 cursor-pointer"
        >
          logout
        </button>
      ) : (
        <button
          onClick={login}
          className="bg-blue-600 text-white font-bold rounded-xl p-2 cursor-pointer"
        >
          login
        </button>
      )}
    </div>
  );
}

export default LoginBtn;
