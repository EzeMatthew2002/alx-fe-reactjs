import React, { useState } from 'react';
import { useAuth } from '../App';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const [name, setName] = useState('');
  const { setUser } = useAuth();
  const nav = useNavigate();

  function submit(e){
    e.preventDefault();
    setUser(name || 'DemoUser'); // simple login
    nav('/profile');
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="username"/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
