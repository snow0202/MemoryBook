import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Navigation } from './Navigation';
import { BrowserRouter } from 'react-router-dom';

describe('Navigation', () => {
  // ナビゲーションコンポーネントが正しくレンダリングされることを確認する
  it('should render the Navigation component correctly', () => {
    // コンポーネントをレンダリングする
    const { getByText } = render(
      <BrowserRouter>
        <Navigation open={true} id="navigation" />
      </BrowserRouter>
    );

    // ナビゲーションリンクが表示されていることを確認する
    expect(getByText('おもいでを増やす')).toBeInTheDocument();
    expect(getByText('お問い合わせ')).toBeInTheDocument();
  });

  // openプロパティに応じてナビゲーションが表示されるかどうかを確認する
  it('should set aria-hidden attribute based on open prop', () => {
    // openがtrueの場合
    const { getByRole, rerender } = render(
      <BrowserRouter>
        <Navigation open={true} id="navigation" />
      </BrowserRouter>
    );

    // ナビゲーションが表示されていることを確認する
    const nav = getByRole('navigation');
    expect(nav).toHaveAttribute('aria-hidden', 'false');

    // openがfalseの場合
    rerender(
      <BrowserRouter>
        <Navigation open={false} id="navigation" />
      </BrowserRouter>
    );

    // ナビゲーションが非表示になっていることを確認する
    expect(nav).toHaveAttribute('aria-hidden', 'true');
  });

  // ナビゲーションリンクが正しく設定されていることを確認する
  it('should have correct navigation links', () => {
    // コンポーネントをレンダリングする
    const { getByText } = render(
      <BrowserRouter>
        <Navigation open={true} id="navigation" />
      </BrowserRouter>
    );

    // 各リンクが正しいURLを持っていることを確認する
    expect(getByText('おもいでを増やす')).toHaveAttribute('href', '/UploadPage');
    expect(getByText('お問い合わせ')).toHaveAttribute('href', '/Contact');
  });
});
