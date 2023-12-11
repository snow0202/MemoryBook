import React from "react";
import { Button } from '../../Common/Button/Button';
import Style from "./Head.module.css";

interface ToggleButtonProps {
  open: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  controls: string;
  label: string;
};

// ハンバーガーメニューボタンコンポーネント
export const ToggleButton: React.FC<ToggleButtonProps> = (props) => {
  return (
    <Button
      aria-controls={props.controls}
      aria-expanded={props.open}
      aria-label={props.label}
      onClick={props.onClick}
      className={Style.toggleButon}
    >
      <span className={Style.line1}></span>
      <span className={Style.line2}></span>
    </Button>
  );
};
