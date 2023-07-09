import { FC, MouseEventHandler } from "react";
import Style from "./Head.module.css";

type Props = {
  open: boolean;
  onClick: MouseEventHandler;
  controls: string;
  label: string;
};

export const ToggleButton: FC<Props> = ({ open, controls, label, onClick }) => {
  return (
    <button
      type="button"
      aria-controls={controls}
      aria-expanded={open}
      aria-label={label}
      onClick={onClick}
      className={Style.toggleButon}
    >
      <span className={Style.line1}></span>
      <span className={Style.line2}></span>
    </button>
  );
};
