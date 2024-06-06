import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Contact } from './Contact';

describe('Contact', () => {
  it('renders the Contact form correctly', () => {
    const { getByLabelText, getByText } = render(<Contact />);
    
    expect(getByLabelText('おなまえ*')).toBeInTheDocument();
    expect(getByLabelText('メールアドレス*')).toBeInTheDocument();
    expect(getByLabelText('お困りごと')).toBeInTheDocument();
    expect(getByText('送信')).toBeInTheDocument();
  });

  it('shows error messages when fields are empty', () => {
    const { getByText, container } = render(<Contact />);

    const submitButton = getByText('送信');
    fireEvent.click(submitButton);

    const nameFormGroup = container.querySelector('#name-form');
    const emailFormGroup = container.querySelector('#email-form');

    expect(nameFormGroup).toHaveClass('formgroupError');
    expect(emailFormGroup).toHaveClass('formgroupError');
  });

  it('does not show error messages for valid input', () => {
    const { getByLabelText, container } = render(<Contact />);

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
