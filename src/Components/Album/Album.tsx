import { FC } from "react";
import HTMLFlipBook from 'react-pageflip';
import Style from './Album.module.css';
import Tsumu1 from '../../img/1198.JPG';
import Tsumu2 from '../../img/IMG_1486.JPG';
import Tsumu3 from '../../img/PXL_20230223_023729479.jpg';
import Tsumu4 from '../../img/PXL_20230411_040348439.jpg';

// メインアルバムコンポーネント
export const Album: FC = () => {
  return (
    <div className={Style.whole}>
      <div className={Style.container}>
        <HTMLFlipBook
          width={650}
          height={750}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          startPage={0}
          maxShadowOpacity={0.4}
          mobileScrollSupport={true}
          className={Style.flipBook}
        >
          {/* ページのトップ */}
          <div className={Style.top} />
          {/* もくじ */}
          <div className={Style.index}>
            <p className={Style.title}>つむた0歳の巻</p>
          </div>
          {/* 1ページ目 */}
          <div className={Style.page}>
            <img src={Tsumu1} className={Style.photo} alt="Page 1" />
            <p className={Style.date}> 2022・6・23</p>
            <p className={Style.text}>焼津病院で 紬星 はおめでたく誕生しました。</p>
            <footer className={Style.footer}>1</footer>
          </div>
          {/* 2ページ目 */}
          <div className={Style.page}>
            <img src={Tsumu2} className={Style.photo} alt="Page 2" />
            <p className={Style.date}> 2022・7・30</p>
            <p className={Style.text}>紬星さんの誕生です。どんな大人になるか楽しみですね。</p>
            <footer className={Style.footer}>2</footer>
          </div>
          {/* 3ページ目 */}
          <div className={Style.page}>
            <img src={Tsumu3} className={Style.photo} alt="Page 3" />
            <p className={Style.date}> 2023・1・20</p>
            <p className={Style.text}>紬星さんは初めての長野県へお出かけ(*"▽")</p>
            <footer className={Style.footer}>3</footer>
          </div>
          {/* 4ページ目 */}
          <div className={Style.page}>
            <img src={Tsumu4} className={Style.photo} alt="Page 4" />
            <p className={Style.date}> 2023・4・13</p>
            <p className={Style.text}>なんでこれだけ画質がこんなにもひどいのか(泣)</p>
            <footer className={Style.footer}>4</footer>
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
};
