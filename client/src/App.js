import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import { getToken, setToken, removeToken } from './utils/auth';
import './App.css';

export default function App(){
  const [route, setRoute] = useState('login'); // 'login' | 'register' | 'dashboard'

  useEffect(()=>{
    const t = getToken();
    if (t) setRoute('dashboard');
  },[]);

  function onLogin(){
    setRoute('dashboard');
  }
  function onLogout(){
    removeToken();
    setRoute('login');
  }

  return (
    <div className="app-root">
      <header className="app-header">
        <h1>Intern Task App</h1>
        <div>
          {route !== 'dashboard' && <button onClick={()=>setRoute('register')}>Register</button>}
          {route !== 'dashboard' && <button onClick={()=>setRoute('login')}>Login</button>}
          {route === 'dashboard' && <button onClick={onLogout}>Logout</button>}
        </div>
      </header>
      <main>
        {route==='login' && <Login onLogin={onLogin} />}
        {route==='register' && <Register onRegistered={()=>setRoute('login')} />}
        {route==='dashboard' && <Dashboard />}
      </main>
    </div>
  );
}
