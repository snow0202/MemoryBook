// src/typings/react-pageflip.d.ts
declare module 'react-pageflip' {
  import * as React from 'react';

  export interface IPage {
    flipForward(): void;
    flipBackward(): void;
  }

  export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: number;
    height?: number;
    size?: 'fixed' | 'stretch';
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    drawShadow?: boolean;
    flippingTime?: number;
    useMouseEvents?: boolean;
    startPage?: number;
    swipeDistance?: number;
    showPageCorners?: boolean;
    mobileScrollSupport?: boolean;
    clickEventForward?: boolean;
    clickEventBackward?: boolean;
    className?: string;
    style?: React.CSSProperties;
    renderOnlyPageLengthChange?: boolean;
    onChangeState?: (data: any) => void;
    onFlip?: (data: any) => void;
    onChangeOrientation?: (data: any) => void;
    maxShadowOpacity?: number;
    usePortrait?: boolean;
    startZIndex?: number;
    showCover?: boolean;
    autoSize?: boolean;
    disableFlipByClick?: boolean;
  }

  const HTMLFlipBook: React.FC<IProps & React.RefAttributes<IPage>>;

  export default HTMLFlipBook;
}
