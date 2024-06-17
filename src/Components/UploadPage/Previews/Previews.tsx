import { FC } from "react";
import HTMLFlipBook from "react-pageflip";
import Style from "./Previews.module.css";

interface UploadedFile {
  file: File;
  preview: string;
  selected: boolean;
}

interface PreviewsProps {
  selectedFiles: UploadedFile[];
}

// プレビュー画面
export const Previews: FC<PreviewsProps> = (props) => {
  return (
    <div className={Style.previewContainer}>
      <HTMLFlipBook
        className={Style.flipbookContainer}
        style={{ width: '100%', height: '100%' }}
        startPage={0}
        width={650}
        height={750}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={false}
        startZIndex={0}
        autoSize={false}
        maxShadowOpacity={0.4}
        showCover={true}
        mobileScrollSupport={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        {/* ページのトップ */}
        <div className={Style.top} />
        {/* もくじ */}
        <div className={Style.index}>
          <p className={Style.title}>プレビュー</p>
        </div>
        {/* 追加画像 */}
        {props.selectedFiles.map((file, index) => (
          <div key={index} className={Style.page}>
            <div className={Style.previewPage}>
              {file.file.type.startsWith("image/") ? (
                <img src={file.preview} className={Style.previewImage} alt={`Preview ${index}`} />
              ) : file.file.type === "video/mp4" ? (
                <video controls className={Style.previewImage}>
                  <source src={file.preview} type="video/mp4" />
                </video>
              ) : null}
            </div>
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};
