import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';

describe('Header', () => {
  // ヘッダーコンポーネントが正しくレンダリングされることを確認する
  it('should render the Header component correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    // タイトルが表示されていることを確認
    expect(getByText('つむたのおもいで')).toBeInTheDocument();
  });

  // トグルボタンのクリックでナビゲーションメニューが開閉することを確認する
  it('should toggle the navigation menu when the button is clicked', () => {
    const { getByLabelText, getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const toggleButton = getByLabelText('メニューを開きます');
    const navLink = getByText('おもいでを増やす'); // Navigationコンポーネント内のリンクテキストを使用

    // 初期状態でナビゲーションメニューが閉じていることを確認
    expect(navLink.closest('nav')).toHaveAttribute('aria-hidden', 'true');

    // トグルボタンをクリックしてナビゲーションメニューが開くことを確認
    fireEvent.click(toggleButton);
    expect(navLink.closest('nav')).not.toHaveAttribute('aria-hidden', 'true');

    // トグルボタンを再度クリックしてナビゲーションメニューが閉じることを確認
    fireEvent.click(toggleButton);
    expect(navLink.closest('nav')).toHaveAttribute('aria-hidden', 'true');
  });
});
