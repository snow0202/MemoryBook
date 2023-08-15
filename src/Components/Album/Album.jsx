import HTMLFlipBook from 'react-pageflip';
import Style from './Album.module.css';
import Tsumu1 from '../../img/IMG_1198.JPG';
import Tsumu2 from '../../img/IMG_1486.JPG';
import Tsumu3 from '../../img/PXL_20230223_023729479.jpg';
import Tsumu4 from '../../img/PXL_20230411_040348439.jpg';
import Tsumu5 from '../../img/IMG_1200.JPG';
import Tsumu6 from '../../img/PXL_20230318_034110835~2.jpg';
import Tsumu7 from '../../img/IMG_1332.JPG';
import Tsumu8 from '../../img/PXL_20230617_033711945.jpg';
import Tsumu9 from '../../img/IMG_1494.JPG';
import Tsumu10 from '../../img/IMG_1606.JPG';
import Tsumu11 from '../../img/PXL_20230721_020838287.jpg';
import Tsumu12 from '../../img/PXL_20230714_055350353.MP.jpg';
import Tsumu13 from '../../img/PXL_20230721_035057908.MP.jpg';
import Tsumu14 from '../../img/PXL_20230811_030717419.jpg';
import Tsumu15 from '../../img/PXL_20230811_075309389.jpg';
import Tsumu16 from '../../img/PXL_20230721_020847039.TS.mp4';

export const Album = () => {
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
        >
          {/* ページのトップ */}
          <div className={Style.top} />
          {/* もくじ */}
          <div className={Style.index}>
            <p className={Style.title}>つむた0歳の巻</p>
          </div>
          {/* 1ページ目 */}
          <div className={Style.page}>
            <img src={Tsumu1} className={Style.photo} />
            <p className={Style.date}> 2022・6・23</p>
            <p className={Style.text}>焼津病院で 紬星 はおめでたく誕生しました。</p>
            <footer className={Style.footer}>1</footer>
          </div>
          {/* 2ページ目 */}
          <div className={Style.page}>
            <img src={Tsumu2} className={Style.photo} />
            <p className={Style.date}> 2022・7・30</p>
            <p className={Style.text}>紬星さんの誕生です。どんな大人になるか楽しみですね。</p>
            <footer className={Style.footer}>2</footer>
          </div>
          {/* 3ページ目 */}
          <div className={Style.page}>
            <img src={Tsumu3} className={Style.photo} />
            <p className={Style.date}> 2023・1・20</p>
            <p className={Style.text}>紬星さんは初めての長野県へお出かけ(*'▽')</p>
            <footer className={Style.footer}>3</footer>
          </div>
          {/* 4ページ目 */}
          <div className={Style.page}>
            <img src={Tsumu4} className={Style.photo} />
            <p className={Style.date}> 2023・4・13</p>
            <p className={Style.text}>なんでこれだけ画質がこんなにもひどいのか(泣)</p>
            <footer className={Style.footer}>4</footer>
          </div>
          {/* 5ページ目 */}
          <div className={Style.page}>
            <img src={Tsumu5} className={Style.photo} />
            <p className={Style.date}> 2022・6・23</p>
            <p className={Style.text}>足が細い(羨ましい)</p>
            <footer className={Style.footer}>5</footer>
          </div>
          {/* 6ページ目 */}
          <div className={Style.page}>
            <img src={Tsumu6} className={Style.photo} />
            <p className={Style.date}> 2023・2・2</p>
            <p className={Style.text}>みそラーメン🍺</p>
            <footer className={Style.footer}>6</footer>
          </div>
          {/* 7ページ目 */}
          <div className={Style.page}>
            <img src={Tsumu7} className={Style.photo} />
            <p className={Style.date}> 2022・7・2</p>
            <p className={Style.text}>気持ちよさそうに寝る姫</p>
            <footer className={Style.footer}>7</footer>
          </div>
          {/* 8ページ目 */}
          <div className={Style.page}>
            <img src={Tsumu8} className={Style.photo} />
            <p className={Style.date}> 2023・6・12</p>
            <p className={Style.text}>テラスでチルするしーすけとおつむ</p>
            <footer className={Style.footer}>8</footer>
          </div>
          {/* 9ページ目 */}
          <div className={Style.page}>
            <img src={Tsumu9} className={Style.photo} />
            <p className={Style.date}> 2022・9・23</p>
            <p className={Style.text}>3か月記念日🎂</p>
            <footer className={Style.footer}>9</footer>
          </div>
          {/* 10ページ目 */}
          <div className={Style.page}>
            <img src={Tsumu10} className={Style.photo} />
            <p className={Style.date}> 2022・10・31</p>
            <p className={Style.text}>ハロウィンパーティ🎃</p>
            <footer className={Style.footer}>10</footer>
          </div>
          {/* 11ページ目 */}
          <div className={Style.page}>
            <img src={Tsumu11} className={Style.photo} />
            <p className={Style.date}> 2023・7・21</p>
            <p className={Style.text}>お魚さんみつけた！</p>
            <footer className={Style.footer}>11</footer>
          </div>
          {/* 12ページ目 */}
          <div className={Style.page}>
            <img src={Tsumu12} className={Style.photo} />
            <p className={Style.date}> 2023・7・14</p>
            <p className={Style.text}>シャッキーン</p>
            <footer className={Style.footer}>12</footer>
          </div>
          {/* 13ページ目 */}
          <div className={Style.page}>
            <img src={Tsumu13} className={Style.photo} />
            <p className={Style.date}> 2023・7・21</p>
            <p className={Style.text}>つかまり立ちができたよ！</p>
            <footer className={Style.footer}>13</footer>
          </div>
          {/* 14ページ目 */}
          <div className={Style.page}>
            <img src={Tsumu14} className={Style.photo} />
            <p className={Style.date}> 2023・8・11</p>
            <p className={Style.text}>薔薇の風船もらったよ！</p>
            <footer className={Style.footer}>14</footer>
          </div>
          {/* 15ページ目 */}
          <div className={Style.page}>
            <img src={Tsumu15} className={Style.photo} />
            <p className={Style.date}> 2023・8・11</p>
            <p className={Style.text}>アンパンマンあげる♡</p>
            <footer className={Style.footer}>15</footer>
          </div>
          {/* 16ページ目 */}
          <div className={Style.page}>
            <video controls className={Style.photo}>
              <source src={Tsumu16} type="video/mp4" />
            </video>
            <p className={Style.date}> 2023・7・21</p>
            <p className={Style.text}>喋るつむぎさん</p>
            <footer className={Style.footer}>16</footer>
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
};