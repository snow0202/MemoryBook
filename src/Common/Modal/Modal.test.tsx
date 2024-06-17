import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Modal } from './Modal';
import React from 'react';

describe('Modal', () => {
  // モーダルが開いている時に正しく表示されることをテスト
  it('renders correctly when open', () => {
    render(
      <Modal
        isOpen={true}
        onClose={jest.fn()}
        title="テストタイトル"
        message="テストメッセージ"
      />
    );

    // モーダルのタイトルが表示されていることを確認
    expect(screen.getByText('テストタイトル')).toBeInTheDocument();
    // モーダルのメッセージが表示されていることを確認
    expect(screen.getByText('テストメッセージ')).toBeInTheDocument();
  });

  // モーダルが閉じたときに何も表示されないことをテスト
  it('does not render when closed', () => {
    render(
      <Modal
        isOpen={false}
        onClose={jest.fn()}
        title="テストタイトル"
        message="テストメッセージ"
      />
    );

    // モーダルのタイトルが表示されていないことを確認
    expect(screen.queryByText('テストタイトル')).not.toBeInTheDocument();
    // モーダルのメッセージが表示されていないことを確認
    expect(screen.queryByText('テストメッセージ')).not.toBeInTheDocument();
  });

  // モーダルの閉じるボタンが動作することをテスト
  it('calls onClose when close button is clicked', () => {
    const mockOnClose = jest.fn();

    render(
      <Modal
        isOpen={true}
        onClose={mockOnClose}
        title="テストタイトル"
        message="テストメッセージ"
      />
    );

    // 閉じるボタンをクリック
    fireEvent.click(screen.getByTestId('close-button'));
    // onCloseが呼ばれることを確認
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  // オーバーレイをクリックしたときにモーダルが閉じることをテスト
  it('calls onClose when overlay is clicked', () => {
    const mockOnClose = jest.fn();

    render(
      <Modal
        isOpen={true}
        onClose={mockOnClose}
        title="テストタイトル"
        message="テストメッセージ"
      />
    );

    // オーバーレイをクリック
    fireEvent.click(screen.getByTestId('modal-overlay'));
    // onCloseが呼ばれることを確認
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  // モーダルのカスタムクラスが適用されることをテスト
  it('applies custom class name', () => {
    render(
      <Modal
        isOpen={true}
        onClose={jest.fn()}
        title="テストタイトル"
        message="テストメッセージ"
        className="custom-class"
      />
    );

    // カスタムクラスがモーダルの内容に適用されていることを確認
    expect(screen.getByTestId('modal-overlay').firstChild).toHaveClass('custom-class');
  });
});
