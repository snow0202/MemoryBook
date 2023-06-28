import HTMLFlipBook from 'react-pageflip';
import Style from './Page.module.css';
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

export const Page = () => {  
  return (
    <div className={Style.whole}>
      <Header />
      <h1 className={Style.head}>アルバム</h1>    
      <div className={Style.container}>
        <HTMLFlipBook 
            width={550}
            height={733}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={1}
        >
          <div className={Style.page1}><img src={Tsumu1} width={350} height={550}></img></div>
          <div className={Style.page2}><img src={Tsumu2} width={350} height={550}></img></div>
          <div className={Style.page3}><img src={Tsumu3} width={350} height={550}></img></div>
          <div className={Style.page4}><img src={Tsumu4} width={350} height={550}></img></div>
          <div className={Style.page5}><img src={Tsumu5} width={350} height={550}></img></div>
          <div className={Style.page6}><img src={Tsumu6} width={350} height={550}></img></div>
          <div className={Style.page7}><img src={Tsumu7} width={350} height={550}></img></div>
          <div className={Style.page8}><img src={Tsumu8} width={350} height={550}></img></div>
          <div className={Style.page9}><img src={Tsumu9} width={350} height={550}></img></div>
          <div className={Style.page10}><img src={Tsumu10} width={350} height={550}></img></div>
        </HTMLFlipBook>
      </div>
    </div>
  );
};