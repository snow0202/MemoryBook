import { FC, ReactNode } from "react";
import Style from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  className?: string;
  children?: ReactNode;
}

// 共通モーダルコンポーネント
export const Modal: FC<ModalProps> = (props) => {
  if (!props.isOpen) return null; // モーダルが閉じている場合、何もレンダリングしない

  return (
    <>
      <div
        className={`${Style.modalOverlay} ${props.isOpen ? Style.active : ""}`}
        data-testid="modal-overlay"
        onClick={props.onClose} // オーバーレイクリックでモーダルを閉じる
      >
        <div className={`${Style.modalContent} ${props.className}`} onClick={(e) => e.stopPropagation()}>
          <button className={Style.closeButton} onClick={props.onClose} data-testid="close-button">
            ✖️
          </button>
          <h2 className={Style.modalTitle}>{props.title}</h2>
          <p className={Style.modalText}>{props.message}</p>
          {props.children}
        </div>
      </div>
    </>
  );
};
