import { FC, useState } from "react";
import { LoginEvent } from "./LoginEvent";
import Style from "./Login.module.css";

// ログイン画面
export const Login: FC = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // 名前フィールドのスペースを削除する
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value.replace(/\s+/g, "")); // スペースを削除
  };

  return (
    <div className={Style['change-img-anim']}>
      <header className={Style.head}>おもいでへようこそ</header>
      <div className={Style.label}>
          <label className={Style.label}>
            おなまえ {''}
            <input
              className={Style.text}
              type="text"
              name="name"
              value={name}
              placeholder="山田花子"
              onChange={handleNameChange}
            />
          </label>
          <div>{''}</div>
          <label className={`${Style.label} ${Style.labelPass}`}>
            パスワード {''}
            <input
              className={Style.text}
              type="password"
              name="password"
              value={password}
              placeholder="●●●●"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div>{''}</div>
          <LoginEvent
            className={Style.loginButton}
            isLogin={false}
            name={name}
            password={password}
          />
      </div>
    </div>
  );
};
