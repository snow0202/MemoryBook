import React from 'react';
import './App.css'
import { Login } from './Login';
import { Components } from './Components/Components';

const App: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    console.log('ログインされたメールアドレス:', email, 'とパスワード:', password);
  };

  return (
    <div className='App'>
      <Login onSubmit={handleLogin} />
      <Components />
    </div>
  );
};

export default App;