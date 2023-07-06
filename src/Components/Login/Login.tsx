import { useState } from "react";
import Style from './Login.module.css';
import { LoginEvent } from "./LoginEvent";

export const Login: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);

return (
    <div className={Style['change-img-anim']}>
      <header className={Style.head}>おもいでへようこそ</header>
      <div className={Style.label}>
          <label className={Style.labelName}>
            おなまえ {''}
            <input 
              className={Style.textName} 
              type="name" 
              value={name} 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value)
              }}
            />
          </label>
          <div>{''}</div>
          <label className={Style.labelPass}>
            パスワード {''}
            <input 
                className={Style.textPass} 
                type="password" 
                value={password} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword(e.target.value)
                }}
               />
          </label>
          <div>{''}</div>
          <LoginEvent 
             className={Style.loginButton} 
            isLogin={isLogin}
            name={name}
            password={password}
          />
      </div>
    </div>
  );
};