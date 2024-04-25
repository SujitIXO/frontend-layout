import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate('/dashboard')
  };

  return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input className="p-2 mt-4 rounded-xl border" type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
            <input className="p-2 mt-2 rounded-xl border" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
          <button className='bg-[#002D74] rounded-xl text-white py-2'>Login</button>
        </form>
  );
}

export default Login;
