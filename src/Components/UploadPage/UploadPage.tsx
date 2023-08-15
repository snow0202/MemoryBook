import React, { useState } from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';
import { Button } from '../../Common/Button/Button';
import Style from './UploadPage.module.css';

interface UploadedFile {
  file: FileWithPath;
  preview: string;
  selected: boolean;
}

export const UploadPage: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<UploadedFile[]>([]);
  const [isSelectionMode, setIsSelectionMode] = useState(false);

  const handleFileSelect = (files: FileWithPath[]) => {
    const newFiles: UploadedFile[] = [];

    files.forEach((file) => {
      // 重複チェック
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

    setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...newFiles]);
  };

  const toggleFileSelection = (index: number) => {
    if (isSelectionMode) {
      setSelectedFiles((prevSelectedFiles) => {
        const newSelectedFiles = [...prevSelectedFiles];
        newSelectedFiles[index].selected = !newSelectedFiles[index].selected;
        return newSelectedFiles;
      });
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleFileSelect });

  const handleSelectButtonClick = () => {
    setIsSelectionMode(true);
    //モーダルでプレビュー画面を出して選択された画像を引用し表示する
  };

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
            className={Style.photo}
            onClick={() => toggleFileSelection(index)}
          >
            {file.file.type.startsWith('image/') ? (
              <img src={file.preview} alt="Uploaded" />
            ) : file.file.type === 'video/mp4' ? (
              <video controls className={Style.video}>
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
    </div>
  );
};
