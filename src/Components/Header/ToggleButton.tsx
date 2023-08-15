import { FC, MouseEventHandler } from "react";
import { Button } from '../../Common/Button/Button';
import Style from "./Head.module.css";

type Props = {
  open: boolean;
  onClick: MouseEventHandler;
  controls: string;
  label: string;
};

export const ToggleButton: FC<Props> = (props) => {
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
