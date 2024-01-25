import { FC } from "react";
import { Link } from "react-router-dom";
import Style from "./Head.module.css";

interface NavigationProps {
  open: boolean;
  id: string;
}

// ハンバーガーメニューコンポーネント
export const Navigation: FC<NavigationProps> = (props) => {
  return (
    <nav id={props.id} aria-hidden={!props.open} className={Style.navigation}>
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
