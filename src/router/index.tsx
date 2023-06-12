import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App';
import { Campaigns } from '../views/Campaigns';
import { Audiences } from '../views/Audiences';

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/campaigns" element={<Campaigns />} />
      <Route path="/audiences" element={<Audiences />} />
    </Route>
  )
);
