import { useState } from "react";
import Style from './Login.module.css';
import { LoginEvent } from "./LoginEvent";

interface LoginProps {
    onSubmit: (name: string, password: string) => void;
}

export const Login: React.FC<LoginProps> = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit(name, password);
    };

return (
  <div className={Style['change-img-anim']}>
      <form className={Style.form} onSubmit={handleSubmit}>
          <h1 className={Style.head}>おもいでへようこそ✨</h1>
          <div className={Style.label}>
            <label className={Style.labelName}>
              おなまえ {''}
              <input className={Style.textName} type="name" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <div>{''}</div>
            <label className={Style.labelPass}>
              パスワード {''}
              <input className={Style.textPass} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <div>{''}</div>
            <LoginEvent className={Style.loginButton} />
            </div>
      </form>
    </div>
  );
};