import React, { useState } from 'react';
import Button from './Button';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
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
    console.log(formData);
  };

  return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" className="p-2 mt-2 rounded-xl border" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="p-2 mt-2 rounded-xl border" required />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="p-2 mt-2 rounded-xl border" required />
            <button className='bg-[#002D74] rounded-xl text-white py-2'>Register</button>
        </form>
  );
}

export default Register;
