import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { LoginEvent } from './LoginEvent';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('LoginEvent', () => {
  // ヘルパー関数: `LoginEvent`コンポーネントのレンダリング
  const renderComponent = (props = {}) => {
    return render(
      <BrowserRouter>
        <LoginEvent
          isLogin={false}
          name=""
          password=""
          {...props}
        />
      </BrowserRouter>
    );
  };

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  // 正しい名前とパスワードが入力された場合にナビゲートする
  it('should navigate when the correct name and password are provided', () => {
    const mockNavigate = jest.fn();
    require('react-router-dom').useNavigate.mockImplementation(() => mockNavigate);

    const { getByText } = renderComponent({
      name: '高橋宏典',
      password: '0623'
    });

    fireEvent.click(getByText('おもいで にログイン'));

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(mockNavigate).toHaveBeenCalledWith('/App');
  });

  // 間違った名前が入力された場合にエラーメッセージが表示される
  it('should display an error message when an incorrect name is provided', () => {
    const { getByText } = renderComponent({
      name: '間違った名前',
      password: '0623'
    });

    fireEvent.click(getByText('おもいで にログイン'));

    expect(getByText('おなまえ が違うよ！')).toBeInTheDocument();
  });

  // 間違ったパスワードが入力された場合にエラーメッセージが表示される
  it('should display an error message when an incorrect password is provided', () => {
    const { getByText } = renderComponent({
      name: '高橋宏典',
      password: '1234'
    });

    fireEvent.click(getByText('おもいで にログイン'));

    expect(getByText('パスワード が違うよ！')).toBeInTheDocument();
  });

  // `isLogin`が`true`の場合にボタンが無効化される
  it('should disable the button when isLogin is true', () => {
    const { getByText } = renderComponent({
      isLogin: true,
      name: '高橋宏典',
      password: '0623'
    });

    const button = getByText('おもいで にログイン');
    expect(button).toBeDisabled();
  });
});
