import React from 'react';
import Style from './App.module.css'
import { Album } from './Components/Book/Album';

const App: React.FC = () => {
  return (
    <>
        <div className={Style.App}>
          <Album />
        </div>
    </>
  );
};

export default App;