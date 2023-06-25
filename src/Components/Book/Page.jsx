import HTMLFlipBook from 'react-pageflip';
import Style from './Page.module.css';
import Tsumu1 from '../../img/IMG_1198.JPG'
import Tsumu2 from '../../img/IMG_1059.JPG'
import Tsumu3 from '../../img/IMG_1197.JPG'
import Tsumu4 from '../../img/IMG_1199.JPG'

export const Page = () => {  
  return (    
    <div>
      <HTMLFlipBook width={350} height={550}>
        <div className={Style.page1}><img src={Tsumu1} width={350} height={550}></img></div>
        <div className={Style.page2}><img src={Tsumu2} width={350} height={550}></img></div>
        <div className={Style.page3}><img src={Tsumu3} width={350} height={550}></img></div>
        <div className={Style.page4}><img src={Tsumu4} width={350} height={550}></img></div>
      </HTMLFlipBook>
    </div>
  );
};