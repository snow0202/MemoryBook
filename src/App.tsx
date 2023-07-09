import React from 'react';
import Style from './App.module.css';
import { Header } from './Components/Header/Header';
import { Album } from './Components/Album/Album';

const App: React.FC = () => {
  return (
    <>
        <Header />
        <div className={Style.body}>
          <Album />
        </div>
    </>
  );
};

export default App;