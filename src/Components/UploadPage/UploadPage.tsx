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
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  const handleFileSelect = (files: FileWithPath[]) => {
    const newFiles: UploadedFile[] = [];
    // 重複チェック
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
    setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...newFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleFileSelect });

  const handleSelectButtonClick = () => {
    if (selectedIndices.length === 0) {
      alert('どれか一つ以上選択してね！');
      return;
    }
    //モーダルでプレビュー画面を出して選択された画像を引用し表示する
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
    </div>
  );
};
