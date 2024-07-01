import { FC, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Common/Button/Button";
import Style from "./Login.module.css";
import { Loading } from "../../Common/Loading/Loading";

interface LoginEventProps {
  isLogin: boolean;
  name: string;
  password: string;
  className?: string;
}

// ログイン認証コンポーネント
export const LoginEvent: FC<LoginEventProps> = (props) => {
  const navigate = useNavigate();
  const passPattern: RegExp = /^[0][6][2][3]/;
  const [isError, setIsError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [kohkun, shisuke, tumu] = ["高橋宏典", "福住静芳", "福住紬星"];

  // なまえとパスワードのテキスト判定処理
  const handleLogin = () => {
    if ((props.name === kohkun || props.name === shisuke || props.name === tumu) && passPattern.test(props.password)) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/App");
      }, 3000);
    } else if (!(props.name === kohkun || props.name === shisuke || props.name === tumu)) {
      setIsError("おなまえ が違うよ！");
    } else if (!passPattern.test(props.password)) {
      setIsError("パスワード が違うよ！");
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
};
