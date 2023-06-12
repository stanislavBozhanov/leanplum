import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.scss';

export default function App() {
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
