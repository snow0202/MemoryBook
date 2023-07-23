import React, { useState } from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';
import Style from "./UploadPage.module.css";

interface UploadedFile {
  file: FileWithPath;
  preview: string;
}

export const UploadPage: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<UploadedFile[]>([]);

  const handleFileSelect = (files: FileWithPath[]) => {
    const uploadedFiles = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...uploadedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleFileSelect });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>思い出をドラッグ＆ドロップしてね</p>
      </div>
      <div className={Style.photo}>
        {selectedFiles.map((file) => (
          <div key={file.file.name}>
            <img src={file.preview} alt="Uploaded" />
            <p>{file.file.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};