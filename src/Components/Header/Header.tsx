import React, { useState } from "react";
import { ToggleButton } from "./ToggleButton";
import { Navigation } from "./Navigation";
import Style from "./Head.module.css";

// ヘッダーコンポーネント
export const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
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
