import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App';
import { Login } from './Login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const handleLogin = (email: string, password: string) => {
  console.log('ログインされたメールアドレス:', email, 'とパスワード:', password);
};
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login onSubmit={handleLogin} />} />
        <Route path="/App" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);