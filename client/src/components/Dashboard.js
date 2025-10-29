import React, { useEffect, useState } from 'react';
import api from '../api';
import { getToken } from '../utils/auth';

export default function Dashboard(){
  const [profile,setProfile]=useState(null);
  const [tasks,setTasks]=useState([]);
  const [title,setTitle]=useState('');
  useEffect(()=>{ fetchProfile(); fetchTasks(); },[]);
  async function fetchProfile(){
    try{
      const t = getToken();
      api.defaults.headers.common['Authorization'] = `Bearer ${t}`;
      const res = await api.get('/profile');
      setProfile(res.data);
    }catch(err){ console.error(err); }
  }
  async function fetchTasks(){
    try{
      const t = getToken();
      api.defaults.headers.common['Authorization'] = `Bearer ${t}`;
      const res = await api.get('/tasks');
      setTasks(res.data);
    }catch(err){ console.error(err); }
  }
  async function addTask(e){
    e.preventDefault();
    try{
      const res = await api.post('/tasks', { title });
      setTasks(prev => [res.data, ...prev]);
      setTitle('');
    }catch(err){ console.error(err); }
  }
  async function toggleComplete(id){
    try{
      const t = tasks.find(x=>x._id===id);
      const res = await api.put(`/tasks/${id}`, { completed: !t.completed });
      setTasks(tasks.map(x=> x._id===id?res.data:x));
    }catch(err){ console.error(err); }
  }
  async function deleteTask(id){
    try{
      await api.delete(`/tasks/${id}`);
      setTasks(tasks.filter(x=>x._id!==id));
    }catch(err){ console.error(err); }
  }
  return (
    <div>
      <h2>Dashboard</h2>
      {profile && <div>Welcome, {profile.name} ({profile.email})</div>}
      <section className="task-form">
        <form onSubmit={addTask}>
          <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="New task title" />
          <button type="submit">Add</button>
        </form>
      </section>
      <ul className="task-list">
        {tasks.map(t=>(
          <li key={t._id} className={t.completed? 'done':''}>
            <span onClick={()=>toggleComplete(t._id)} style={{cursor:'pointer'}}>{t.title}</span>
            <button onClick={()=>deleteTask(t._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
