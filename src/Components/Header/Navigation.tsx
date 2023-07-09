import { FC } from "react";
import { Link } from 'react-router-dom';
import Style from "./Head.module.css";

type Props = {
  open: boolean;
  id: string;
};

export const Navigation: FC<Props> = ({ open, id }) => {
  return (
    <nav id={id} aria-hidden={!open} className={Style.navigation}>
      <ul>
        <li>
          <Link to="/UploadPage">おもいでを増やす</Link>
        </li>
        <li>
          <Link to="/Contact">お問い合わせ</Link>
        </li>
      </ul>
    </nav>
  );
};
