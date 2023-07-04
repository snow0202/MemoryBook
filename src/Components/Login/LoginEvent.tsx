import { useNavigate } from 'react-router-dom';

interface LoginEventProps {
  className?: string;
}

export const LoginEvent: React.FC<LoginEventProps> = (props) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/App');
  };

  return (
    <>
        <button className={props.className} onClick={handleLogin}>おもいでにログイン</button>
    </>
  );
};