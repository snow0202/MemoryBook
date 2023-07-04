import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App';
import { Login } from './Components/Login/Login';
import { UploadPage } from './Components/UploadPage/UploadPage'
import { Contact } from './Components/Contact/Contact';
import cat1 from './img/cat1.jpg'
import cat2 from './img/cat2.jpg'
import cat3 from './img/cat3.jpg'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const handleLogin = (name: string, password: string) => {
  console.log('ログインされたメールアドレス:', name, 'とパスワード:', password);
};

root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/login" element={<Login onSubmit={handleLogin} />} />
        <Route path="/App" element={<App />} />
        <Route path="/UploadPage" element={<UploadPage />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);