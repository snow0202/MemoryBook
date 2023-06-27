import { useNavigate } from 'react-router-dom';

export const LoginEvent = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/App');
  };

  return (
    <>
        <button onClick={handleLogin}>ログイン</button>
    </>
  );
};