import { FC } from "react";
import { Header } from "../Components/Header/Header";
import { Album } from "../Components/Album/Album";
import Style from "./App.module.css";

// メイン画面
const App: FC = () => {
  return (
    <>
      <Header />
      <div className={Style.body}>
        <Album />
      </div>
    </>
  );
};

export default App;