import React, { useState, useMemo } from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';
import { Button } from '../../Common/Button/Button';
import { Previews } from './Previews/Previews';
import Modal from 'react-modal';
import Style from './UploadPage.module.css';

interface UploadedFile {
  file: FileWithPath;
  preview: string;
  selected: boolean;
}

// 画像投稿画面
export const UploadPage: React.FC = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const selectedFiles = useMemo(() => {
    return files.map((file, index) => ({
      ...file,
      selected: selectedIndices.includes(index),
    }));
  }, [files, selectedIndices]);

  const handleFileSelect = (files: FileWithPath[]) => {
    const newFiles: UploadedFile[] = [];
    files.forEach((file) => {
      if (!selectedFiles.some((selectedFile) => selectedFile.file.name === file.name)) {
        newFiles.push({
          file,
          preview: URL.createObjectURL(file),
          selected: false,
        });
      } else {
        alert('同じものは追加できないよ！');
        return;
      }
    });

    if (selectedFiles.length + newFiles.length > 10) {
      alert('これ以上アップロードできません！');
      return;
    }
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  // ボタン押下後の処理
  const handleSelectButtonClick = () => {
    if (selectedIndices.length === 0) {
      alert('どれか一つ以上選択してね！');
      return;
    }
    setIsModalOpen(true);
  };

  // モーダル閉会処理
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 個々の画像に対してboder色を効かせるための関数
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
    <div className={Style.container}>
      <div className={Style.plus} {...getRootProps()}>
        <input {...getInputProps()} />
        <p className={Style.drag}>思い出をドラッグ＆ドロップしてね</p>
      </div>
      <div className={Style['photo-list']}>
        {selectedFiles.map((file, index) => (
          <div
            key={file.file.name}
            className={`${Style.photo} ${selectedIndices.includes(index) ? Style.selectedBorder : ''}`}
            onClick={() => handleSelect(index)}
          >
            {file.file.type.startsWith('image/') ? (
              <img src={file.preview} alt="Uploaded" />
            ) : file.file.type === 'video/mp4' ? (
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
          onRequestClose={closeModal}
          // className={Style.modal}
        >
          <Previews selectedFiles={selectedFiles.filter((_, index) => selectedIndices.includes(index))} />
        </Modal>
      )}
    </div>
  );
};
