import React, { useState } from 'react';
import api from '../api';

export default function Register({ onRegistered }){
  const [name,setName]=useState(''); const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [err,setErr]=useState(null);
  async function submit(e){
    e.preventDefault();
    try{
      await api.post('/auth/register', { name, email, password });
      onRegistered();
    }catch(e){
      setErr(e.response?.data?.msg || 'Registration failed');
    }
  }
  return (
    <div className="card">
      <h2>Register</h2>
      {err && <div className="err">{err}</div>}
      <form onSubmit={submit}>
        <label>Name</label>
        <input value={name} onChange={e=>setName(e.target.value)} />
        <label>Email</label>
        <input value={email} onChange={e=>setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
