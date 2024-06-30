import { FC, useState, useMemo } from "react";
import { useDropzone, FileWithPath } from "react-dropzone";
import { motion } from 'framer-motion';
import { Header } from "../Header/Header";
import { Button } from "../../Common/Button/Button";
import { Previews } from "./Previews/Previews";
import { Modal } from "../../Common/Modal/Modal";
import Style from "./UploadPage.module.css";

interface UploadedFile {
  file: FileWithPath;
  preview: string;
  selected: boolean;
}

const ALLOWED_EXTENSIONS = ['jpg', 'JPG', 'png', 'mp4', 'jpeg', 'avif', 'MOV'];

// アップロードコンポーネント
export const UploadPage: FC = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // 選択されたファイルのメモ化
  const selectedFiles = useMemo(() => {
    return files.map((file, index) => ({
      ...file,
      selected: selectedIndices.includes(index),
    }));
  }, [files, selectedIndices]);

  // ファイルの拡張子を取得する関数
  const getFileExtension = (fileName: string) => {
    return fileName.split('.').pop()?.toLowerCase();
  };

  // 有効な拡張子かどうかをチェックする関数
  const isValidExtension = (fileName: string) => {
    const extension = getFileExtension(fileName);
    return ALLOWED_EXTENSIONS.includes(extension!);
  };

  // ファイル選択処理
  const handleFileSelect = (files: FileWithPath[]) => {
    const newFiles: UploadedFile[] = [];
    for (const file of files) {
      if (!isValidExtension(file.name)) {
        alert("アップロードできないファイル形式です！");
        return;
      }
      if (!selectedFiles.some((selectedFile) => selectedFile.file.name === file.name)) {
        newFiles.push({
          file,
          preview: URL.createObjectURL(file),
          selected: false,
        });
      } else {
        alert("同じものは追加できないよ！");
        return;
      }
    }

    if (selectedFiles.length + newFiles.length > 10) {
      alert("これ以上アップロードできません！");
      return;
    }
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  // 選択ボタンクリック時の処理
  const handleSelectButtonClick = () => {
    if (selectedIndices.length === 0) {
      alert("どれか一つ以上選択してね！");
      return;
    }
    setIsModalOpen(true);
  };

  // モーダルを閉じる処理
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // ファイル選択のトグル処理
  const handleSelect = (index: number) => {
    setSelectedIndices((prevSelectedIndices) => {
      if (prevSelectedIndices.includes(index)) {
        return prevSelectedIndices.filter((i) => i !== index);
      } else {
        return [...prevSelectedIndices, index];
      }
    });
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleFileSelect });

  return (
    <>
      <Header />
      <motion.div className={Style.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 2 }}>
        <div className={Style.plus} {...getRootProps()}>
          <input {...getInputProps()} />
          <p className={Style.drag}>思い出をドラッグ＆ドロップしてね</p>
        </div>
        <div className={Style["photo-list"]}>
          {selectedFiles.map((file, index) => (
            <div
              key={file.file.name}
              className={`${Style.photo} ${selectedIndices.includes(index) ? Style.selectedBorder : ""}`}
              onClick={() => handleSelect(index)}
            >
              {file.file.type.startsWith("image/") ? (
                <img src={file.preview} alt="Uploaded" />
              ) : file.file.type === "video/mp4" ? (
                <video controls className={Style.photo}>
                  <source src={file.preview} type="video/mp4" />
                </video>
              ) : null}
            </div>
          ))}
        </div>
        {selectedFiles.length > 0 && (
          <Button
            className={Style.selectButton}
            onClick={handleSelectButtonClick}
          >
            アルバムに載せる
          </Button>
        )}
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title="選択したファイル"
            message="以下のファイルをアルバムに載せますか？"
            className={Style.modal}
          >
            <div className={Style.modalContent}>
              <Previews selectedFiles={selectedFiles.filter((_, index) => selectedIndices.includes(index))} />
            </div>
          </Modal>
        )}
      </motion.div>
    </>
  );
};
