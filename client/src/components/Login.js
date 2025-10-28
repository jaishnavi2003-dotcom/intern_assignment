import React, { useState } from 'react';
import api from '../api';
import { setToken } from '../utils/auth';

export default function Login({ onLogin }){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [err,setErr]=useState(null);
  async function submit(e){
    e.preventDefault();
    try{
      const res = await api.post('/auth/login', { email, password });
      setToken(res.data.token);
      onLogin();
    }catch(err){
      setErr(err.response?.data?.msg || 'Login failed');
    }
  }
  return (
    <div className="card">
      <h2>Login</h2>
      {err && <div className="err">{err}</div>}
      <form onSubmit={submit}>
        <label>Email</label>
        <input value={email} onChange={e=>setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
