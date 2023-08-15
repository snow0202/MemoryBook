import { useNavigate } from 'react-router-dom';
import Style from './Login.module.css';
import React, { useState } from 'react';
import { Button } from '../../Common/Button/Button';

interface LoginEventProps {
  isLogin: boolean;
  name: string;
  password: string;
  className?: string;
}

export const LoginEvent: React.FC<LoginEventProps> = (props) => {
  const navigate = useNavigate();
  const kohkun:string = '高橋宏典';
  const shisuke:string = '福住静芳';
  const tumu:string = '福住紬星';
  const passPattern = /^[0][6][2][3]/;
  const [isError, setIsError] = useState('');

  // なまえとパスワードのテキスト判定処理
  const handleLogin = () => {
    if ((props.name === kohkun || props.name === shisuke || props.name === tumu) && passPattern.test(props.password)) {
      navigate('/App');
    } else if (!(props.name === kohkun || props.name === shisuke || props.name === tumu)){
      setIsError('おなまえ が違うよ！')
    } else if (!passPattern.test(props.password)){
      setIsError('パスワード が違うよ！')
    }
  };
  
  return (
    <>
        <Button 
          className={props.className} 
          disabled={props.isLogin}
          onClick={handleLogin}
        >
          おもいで にログイン
        </Button>
        {isError && <p className={Style.errorMsg}>{isError}</p>}
    </>
  );
};