import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './App.scss';

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/audiences');
  }, []);

  return (
    <div id="app">
      <div id="nav">
        <Link to="/campaigns">Campaigns</Link>
        <Link to="/audiences">Audiences</Link>
      </div>

      <div id="content">
        <Outlet />
      </div>
    </div>
  );
}
