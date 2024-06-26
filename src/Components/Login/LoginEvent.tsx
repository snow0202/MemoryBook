import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Common/Button/Button";
import Style from "./Login.module.css";

interface LoginEventProps {
  isLogin: boolean;
  name: string;
  password: string;
  className?: string;
}

// ログイン認証コンポーネント
export const LoginEvent: React.FC<LoginEventProps> = (props) => {
  const navigate = useNavigate();
  const passPattern: RegExp = /^[0][6][2][3]/;
  const [isError, setIsError] = useState<string>("");

  const [kohkun, shisuke, tumu] = useMemo(() => {
    return ["高橋宏典", "福住静芳", "福住紬星"];
  }, []);

  // なまえとパスワードのテキスト判定処理
  const handleLogin = () => {
    if ((props.name === kohkun || props.name === shisuke || props.name === tumu) && passPattern.test(props.password)) {
      navigate("/App");
    } else if (!(props.name === kohkun || props.name === shisuke || props.name === tumu)) {
      setIsError("おなまえ が違うよ！")
    } else if (!passPattern.test(props.password)) {
      setIsError("パスワード が違うよ！")
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
