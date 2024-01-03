import React, { useState } from "react";
import { Button } from '../../Common/Button/Button';
import Style from "./Contact.module.css";

// 問い合わせ画面
export const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);

  // 各テキストのエラーメッセージ
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
      setNameError(false);
    } else if (name === "email") {
      setEmail(value);
      setEmailError(false);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let stopSubmit = false;
    const shisuke:string = '福住静芳';
    const tumu:string = '福住紬星';

    if (name.trim() === "" || name !== shisuke || name !== tumu) {
      setNameError(true);
      stopSubmit = true;
    }

    if (email.trim() === "") {
      setEmailError(true);
      stopSubmit = true;
    }

    if (stopSubmit) return;
  };

  return (
    <div className={Style.formContainer}>
      <header>
        <h1 className={Style.header}>お問い合わせ</h1>
      </header>
      <div className={Style.fish} id={Style.fish1}></div>
      <div className={Style.fish} id={Style.fish2}></div>

      <form id="waterform" onSubmit={handleSubmit} className={Style.form}>
        <div className={`${Style.formgroup} ${nameError ? Style.formgroupError : ""}`} id="name-form">
          <label htmlFor="name">おなまえ*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            onFocus={() => setNameError(false)}
            className={Style.input}
          />
        </div>

        <div className={`${Style.formgroup} ${emailError ? Style.formgroupError : ""}`} id="email-form">
          <label htmlFor="email">メールアドレス*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            onFocus={() => setEmailError(false)}
            className={Style.input}
          />
        </div>

        <div className={Style.formgroup} id="message-form">
          <label htmlFor="message">お困りごと</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleInputChange}
            className={Style.textarea}
          ></textarea>
        </div>

        <Button 
          className={Style.submitButton} 
          onClick={() => {
            //メール送信処理
          }}>
          送信
        </Button>
      </form>
    </div>
  );
};
