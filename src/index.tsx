import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App';
import { Login } from './Components/Login/Login';
import { UploadPage } from './Components/UploadPage/UploadPage'
import { Contact } from './Components/Contact/Contact';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/App" element={<App />} />
        <Route path="/UploadPage" element={<UploadPage />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);