import HTMLFlipBook from 'react-pageflip';
import Style from './Album.module.css';
import { Header } from './Header/Header';
import Tsumu1 from '../../img/IMG_1198.JPG'
import Tsumu2 from '../../img/IMG_1059.JPG'
import Tsumu3 from '../../img/IMG_1197.JPG'
import Tsumu4 from '../../img/IMG_1199.JPG'
import Tsumu5 from '../../img/IMG_1200.JPG'
import Tsumu6 from '../../img/IMG_1331.JPG'
import Tsumu7 from '../../img/IMG_1332.JPG'
import Tsumu8 from '../../img/IMG_1336.JPG'
import Tsumu9 from '../../img/IMG_1337.JPG'
import Tsumu10 from '../../img/IMG_1347.JPG'

export const Album = () => {  
  return (
    <div className={Style.whole}>
      <Header />
      <div className={Style.container}>
        <HTMLFlipBook 
            width={650}
            height={750}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            className="demo-book"
        >
          <div className={Style.top}><p className={Style.title}>つむた0歳の巻</p></div>
          <div className={Style.page1}>
            <img src={Tsumu1} className={Style.photo1} />
            <p className={Style.text1}>0歳。焼津病院で つむた はおめでたく誕生しました。</p>
          </div>
          {/* <img src={Tsumu1} className={Style.page1} /> */}
          <img src={Tsumu2} className={Style.page2} />
          <img src={Tsumu3} className={Style.page3} />
          <img src={Tsumu4} className={Style.page4} />
          <img src={Tsumu5} className={Style.page5} />
          <img src={Tsumu6} className={Style.page6} />
          <img src={Tsumu7} className={Style.page7} />
          <img src={Tsumu8} className={Style.page8} />
          <img src={Tsumu9} className={Style.page9} />
          <img src={Tsumu10} className={Style.page10} />
        </HTMLFlipBook>
      </div>
    </div>
  );
};