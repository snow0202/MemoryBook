import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ToggleButton } from './ToggleButton';

describe('ToggleButton', () => {
  // トグルボタンが正しくレンダリングされることを確認する
  it('should render the ToggleButton component correctly', () => {
    // コンポーネントをレンダリングする
    const { getByLabelText } = render(
      <ToggleButton
        open={false}
        onClick={() => {}}
        controls="navigation"
        label="メニューを開きます"
      />
    );

    // ボタンが正しく表示されていることを確認
    expect(getByLabelText('メニューを開きます')).toBeInTheDocument();
  });

  // トグルボタンがクリックされたときにonClickハンドラーが呼び出されることを確認する
  it('should call onClick handler when clicked', () => {
    // モック関数を作成する
    const mockOnClick = jest.fn();

    // コンポーネントをレンダリングする
    const { getByLabelText } = render(
      <ToggleButton
        open={false}
        onClick={mockOnClick}
        controls="navigation"
        label="メニューを開きます"
      />
    );

    // ボタンを取得する
    const button = getByLabelText('メニューを開きます');

    // ボタンをクリックする
    fireEvent.click(button);

    // onClickハンドラーが呼び出されたことを確認する
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  // ボタンのaria属性が正しく設定されていることを確認する
  it('should have correct aria attributes', () => {
    // コンポーネントをレンダリングする
    const { getByLabelText } = render(
      <ToggleButton
        open={true}
        onClick={() => {}}
        controls="navigation"
        label="メニューを開きます"
      />
    );

    // ボタンを取得する
    const button = getByLabelText('メニューを開きます');

    // aria属性が正しく設定されていることを確認する
    expect(button).toHaveAttribute('aria-controls', 'navigation');
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });
});
