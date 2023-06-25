import React from 'react';
import { Page } from './Book/Page';
// import IMG from '../img/IMG_1200.JPG';

export const Components: React.FC  = () => {
  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 80,
  };
  return (
    <body style={{
      // backgroundImage: `url(${IMG})`,
      minHeight: '100vh',
      backgroundPosition: 'center',
      // backgroundTepeat: 'no-repeat',
      backgroundSize: 'cover'
      }}>
      <div style={style}>
        <Page />
      </div>
    </body>
  );
};