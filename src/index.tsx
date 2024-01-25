import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "./App";
import { Login } from "./Components/Login/Login";
import { UploadPage } from "./Components/UploadPage/UploadPage";
import { Contact } from "./Components/Contact/Contact";

const isAuthenticated = true; // ユーザーの認証状態を管理する変数

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/App" element={isAuthenticated ? <App /> : <Navigate to="/" />} />
        <Route path="/UploadPage" element={isAuthenticated ? <UploadPage /> : <Navigate to="/" />} />
        <Route path="/Contact" element={isAuthenticated ? <Contact /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
