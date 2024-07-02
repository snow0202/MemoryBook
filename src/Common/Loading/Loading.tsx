import { FC } from 'react';
import Style from './Loading.module.css';

// 共通ローディングコンポーネント
export const Loading: FC = () => {
    return (
        <div className={Style.loadingWrapper}>
            <div className={Style.loadingContainer}>
                <div className={Style.circle}></div>
                <div className={Style.circle}></div>
                <div className={Style.circle}></div>
                <div className={Style.shadow}></div>
                <div className={Style.shadow}></div>
                <div className={Style.shadow}></div>
            </div>
            <span className={Style.loadingText}>ろーでぃんぐ中</span>
        </div>
    );
};
