import { FC } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Login } from '../Components/Login/Login';
import { UploadPage } from '../Components/UploadPage/UploadPage';
import { Contact } from '../Components/Contact/Contact';
import { Header } from '../Components/Header/Header';
import { Album } from '../Components/Album/Album';
import { Location } from 'history';
import Style from './App.module.css';

// Appコンポーネント
const App: FC = () => {

  // ユーザーの認証状態を管理する変数
  const isAuthenticated: boolean = true;

  // メイン画面
  const Main: FC = () => {
    return (
      <>
        <Header />
        <div className={Style.body}>
          <Album />
        </div>
      </>
    );
  };

  const location: Location = useLocation();
  
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/App" element={isAuthenticated ? <Main /> : <Navigate to="/" />} />
        <Route path="/UploadPage" element={isAuthenticated ? <UploadPage /> : <Navigate to="/" />} />
        <Route path="/Contact" element={isAuthenticated ? <Contact /> : <Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;