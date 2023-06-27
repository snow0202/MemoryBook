import { useState } from "react";
import { LoginEvent } from "./LoginEvent";

interface LoginProps {
    onSubmit: (email: string, password: string) => void;
}

export const Login: React.FC<LoginProps> = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit(email, password);
    };

return (
    <form onSubmit={handleSubmit}>
        <h1>ログイン</h1>
          <label>
            メールアドレス
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <div>{''}</div>
          <label>
            パスワード
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <LoginEvent />
    </form>
    );
};