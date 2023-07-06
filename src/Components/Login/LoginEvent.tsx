import { useNavigate } from 'react-router-dom';
import Style from './Login.module.css';
import React, { useState } from 'react';

interface LoginEventProps {
  isLogin: boolean;
  name: string;
  password: string;
  className?: string;
}

export const LoginEvent: React.FC<LoginEventProps> = (props) => {
  const navigate = useNavigate();
  const namePattern = /^[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}ー・]+\s[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}ー・]+$/u;
  const passPattern = /^[0][6][2][3]/;
  const [isError, setIsError] = useState('');

  // なまえとパスワードのテキスト判定処理
  const handleLogin = () => {
    if (namePattern.test(props.name) && passPattern.test(props.password)) {
      navigate('/App');
    } else if (!namePattern.test(props.name)){
      setIsError('おなまえが間違うよ！')
    } else if (!passPattern.test(props.password)){
      setIsError('パスワードが間違うよ！')
    }
  };
  
  return (
    <>
        <button 
          className={props.className} 
          disabled={props.isLogin}
          onClick={handleLogin}
        >
          おもいでにログイン
        </button>
        {isError && <p className={Style.errorMsg}>{isError}</p>}
    </>
  );
};