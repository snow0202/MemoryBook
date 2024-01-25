import { FC, useState } from "react";
import { LoginEvent } from "./LoginEvent";
import Style from './Login.module.css';

// ログイン画面
export const Login: FC = () => {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(false);

return (
    <div className={Style['change-img-anim']}>
      <header className={Style.head}>おもいでへようこそ</header>
      <div className={Style.label}>
          <label className={Style.label}>
            おなまえ {''}
            <input 
              className={Style.text} 
              type="name" 
              value={name} 
              placeholder="山田花子"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value)
              }}
            />
          </label>
          <div>{''}</div>
          <label className={`${Style.label} ${Style.labelPass}`}>
            パスワード {''}
            <input 
                className={Style.text} 
                type="password" 
                value={password} 
                placeholder="●●●●"
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