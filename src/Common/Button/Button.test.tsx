import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // 追加
import { Button } from './Button';

it('renders the Button component correctly', () => {
  // ボタンコンポーネントをレンダリングする
  const { getByText } = render(<Button>Click Me</Button>);
  
  // ボタンが正しくレンダリングされることを確認する
  expect(getByText('Click Me')).toBeInTheDocument();
});

it('applies the correct default variant class', () => {
  // デフォルトのバリアントクラスが適用されていることを確認する
  const { getByText } = render(<Button>Default</Button>);
  const button = getByText('Default');
  
  expect(button).toHaveClass('button');
  expect(button).toHaveClass('default');
});

it('applies the correct primary variant class', () => {
  // プライマリのバリアントクラスが適用されていることを確認する
  const { getByText } = render(<Button variant="primary">Primary</Button>);
  const button = getByText('Primary');
  
  expect(button).toHaveClass('button');
  expect(button).toHaveClass('primary');
});

it('applies the correct secondary variant class', () => {
  // セカンダリのバリアントクラスが適用されていることを確認する
  const { getByText } = render(<Button variant="secondary">Secondary</Button>);
  const button = getByText('Secondary');
  
  expect(button).toHaveClass('button');
  expect(button).toHaveClass('secondary');
});

it('calls the onClick handler when clicked', () => {
  // ボタンクリック時にハンドラが呼ばれることを確認する
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>);
  const button = getByText('Click Me');
  
  fireEvent.click(button);
  
  expect(handleClick).toHaveBeenCalledTimes(1);
});
