import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Contact } from './Contact';
import { MemoryRouter } from 'react-router-dom';

describe('Contact', () => {
  // お問い合わせフォームが正しくレンダリングされることを確認する
  it('renders the Contact form correctly', () => {
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );
    
    expect(getByLabelText('おなまえ*')).toBeInTheDocument();
    expect(getByLabelText('メールアドレス*')).toBeInTheDocument();
    expect(getByLabelText('お困りごと')).toBeInTheDocument();
    expect(getByText('送信')).toBeInTheDocument();
  });

  // フィールドが空のときにエラーメッセージが表示されることを確認する
  it('shows error messages when fields are empty', () => {
    const { getByText, container } = render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    const submitButton = getByText('送信');
    fireEvent.click(submitButton);

    const nameFormGroup = container.querySelector('#name-form');
    const emailFormGroup = container.querySelector('#email-form');

    expect(nameFormGroup).toHaveClass('formgroupError');
    expect(emailFormGroup).toHaveClass('formgroupError');
  });

  // 有効な入力があればエラーメッセージが表示されないことを確認する
  it('does not show error messages for valid input', () => {
    const { getByLabelText, container } = render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    const nameInput = getByLabelText('おなまえ*');
    const emailInput = getByLabelText('メールアドレス*');

    fireEvent.change(nameInput, { target: { value: '福住静芳' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    const nameFormGroup = container.querySelector('#name-form');
    const emailFormGroup = container.querySelector('#email-form');

    expect(nameFormGroup).not.toHaveClass('formgroupError');
    expect(emailFormGroup).not.toHaveClass('formgroupError');
  });
});
