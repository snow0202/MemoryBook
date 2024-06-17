import { FC, useState } from "react";
import { ToggleButton } from "./ToggleButton/ToggleButton";
import { Navigation } from "./Navigation/Navigation";
import Style from "./Head.module.css";

// ヘッダーコンポーネント
export const Header: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  // メニューの開閉状態を切り替える関数
  const toggleFunction = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <header className={Style.header}>
      <p className={Style.title}>つむたのおもいで</p>
      <ToggleButton
        open={open}
        controls="navigation"
        label="メニューを開きます"
        onClick={toggleFunction}
      />
      <Navigation id="navigation" open={open} />
    </header>
  );
};
