import { FC, useState } from "react";
import { Modal } from "../../Common/Modal/Modal";
import { Header } from "../Header/Header";
import { Button } from "../../Common/Button/Button";
import Style from "./Contact.module.css";

// お問い合わせフォーム画面
export const Contact: FC = () => {
  // フォームの状態管理
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [nameError, setNameError] = useState<string | null>(null); // 名前エラーメッセージ
  const [emailError, setEmailError] = useState<string | null>(null); // メールエラーメッセージ
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalMessage, setModalMessage] = useState<string>("");

  // 入力変更時の処理
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // 各入力フィールドの状態を更新
    if (name === "name") {
      setName(value.replace(/\s+/g, "")); // スペースを自動削除
      setNameError(null); // 名前エラーをリセット
    } else if (name === "email") {
      setEmail(value);
      setEmailError(null); // メールエラーをリセット
    } else if (name === "message") {
      setMessage(value);
    }
  };

  // 名前のバリデーション
  const validateName = (name: string): boolean => {
    const validNames = ["福住静芳", "ふくずみしずか", "福住紬星", "ふくずみつむぎ"];
    return validNames.includes(name);
  };

  // メールアドレスのバリデーション
  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  // フォーム送信時の処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // デフォルトのフォーム送信を無効化
    let stopSubmit = false; // 送信を停止するフラグ

    // 名前のバリデーション
    if (!validateName(name)) {
      setNameError("名前が違うよ！");
      stopSubmit = true;
    }

    // メールのバリデーション
    if (!validateEmail(email)) {
      setEmailError("アドレスが違うよ！");
      stopSubmit = true;
    }

    // エラーがある場合は送信を停止
    if (stopSubmit) return;

    // フォームデータの送信
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        setModalTitle("成功"); // 成功モーダルのタイトルを設定
        setModalMessage("お問い合わせが送信されました！"); // 成功メッセージを設定
      } else {
        setModalTitle("エラー"); // エラーモーダルのタイトルを設定
        setModalMessage("送信に失敗しました。再度お試しください。"); // エラーメッセージを設定
      }
    } catch (error) {
      setModalTitle("エラー"); // エラーモーダルのタイトルを設定
      setModalMessage("エラーが発生しました。"); // エラーメッセージを設定
    } finally {
      setModalOpen(true); // モーダルを表示
    }
  };

  return (
    <>
      {/* ヘッダーの表示 */}
      <Header />
      <div className={Style.formContainer}>
        <header>
          <h1 className={Style.header}>
            お問い合わせ
          </h1>
        </header>
        {/* 装飾用の魚の画像 */}
        <div className={Style.fish} id={Style.fish1}></div>
        <div className={Style.fish} id={Style.fish2}></div>

        {/* フォームの表示 */}
        <form id="waterform" onSubmit={handleSubmit} className={Style.form}>
          <div className={`${Style.formgroup} ${nameError ? Style.formgroupError : ""}`} id="name-form">
            <label htmlFor="name">おなまえ*</label>
            {nameError && <span className={Style.errorMsg}>{nameError}</span>}
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleInputChange}
              onFocus={() => setNameError(null)} // フォーカス時にエラーをリセット
              className={Style.input}
            />
          </div>

          <div className={`${Style.formgroup} ${emailError ? Style.formgroupError : ""}`} id="email-form">
            <label htmlFor="email">メールアドレス*</label>
            {emailError && <span className={Style.errorMsg}>{emailError}</span>}
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              onFocus={() => setEmailError(null)} // フォーカス時にエラーをリセット
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

          {/* 送信ボタン */}
          <Button
            type="submit"
            className={Style.submitButton}
          >
            送信
          </Button>
        </form>
      </div>

      {/* 成功/エラーメッセージ用のモーダル */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        message={modalMessage}
        className={Style.customModal}
      />
    </>
  );
};
