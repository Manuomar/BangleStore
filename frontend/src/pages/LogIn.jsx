import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
function LogIn() {
     const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const {setisAuth} = useAuth();
const navigate = useNavigate();
    const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: validate credentials or call backend API
    // For demo, just assume login success with user info
    const userData = { email, name: "Demo User", photoURL: "https://i.pravatar.cc/40" };
   setisAuth(true);
        navigate('/home');
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* form inputs */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-600 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
    </div>
  )
}

export default LogIn
