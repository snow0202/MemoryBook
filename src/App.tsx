import React from 'react';
import Style from './App.module.css'
import { Page } from './Components/Book/Page';

const App: React.FC = () => {
  return (
    <>
        <div className={Style.App}>
          <Page />
        </div>
    </>
  );
};

export default App;