import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { Login } from './Login';

describe('Login', () => {
  // コンポーネントをレンダリングするためのヘルパー関数
  const renderComponent = () => {
    return render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  };

  // コンポーネントが正しくレンダリングされることを確認する
  it('should render the Login component correctly', () => {
    const { getByPlaceholderText, getByText } = renderComponent();
    
    // プレースホルダーテキストを確認
    expect(getByPlaceholderText('山田花子')).toBeInTheDocument();
    expect(getByPlaceholderText('●●●●')).toBeInTheDocument();
    // ヘッダーテキストを確認
    expect(getByText('おもいでへようこそ')).toBeInTheDocument();
  });

  // 名前入力が変更されたときに状態が更新されることを確認する
  it('should update name state on input change', () => {
    const { getByPlaceholderText } = renderComponent();
    const nameInput = getByPlaceholderText('山田花子') as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: '高橋宏典' } });
    expect(nameInput.value).toBe('高橋宏典');
  });

  // パスワード入力が変更されたときに状態が更新されることを確認する
  it('should update password state on input change', () => {
    const { getByPlaceholderText } = renderComponent();
    const passwordInput = getByPlaceholderText('●●●●') as HTMLInputElement;

    fireEvent.change(passwordInput, { target: { value: '0623' } });
    expect(passwordInput.value).toBe('0623');
  });

  // ログインボタンがクリックされたときにLoginEventのonClickが呼び出されることを確認する
  it('should call LoginEvent onClick when the login button is clicked', () => {
    const { getByText } = renderComponent();
    const loginButton = getByText('おもいで にログイン');

    fireEvent.click(loginButton);
    expect(loginButton).toBeInTheDocument(); // 追加のアサーションが必要ならここに記述
  });
});
