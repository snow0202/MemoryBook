import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Album } from './Album';

describe('Album', () => {
  it('renders the Album component correctly', () => {
    const { getByText } = render(<Album />);

    // タイトルが表示されているか確認する
    expect(getByText('つむた0歳の巻')).toBeInTheDocument();
  });

  it('renders the first page correctly', () => {
    const { getByText, getAllByText } = render(<Album />);

    // 最初のページの内容を確認する
    expect(getByText('焼津病院で 紬星 はおめでたく誕生しました。')).toBeInTheDocument();

    // getAllByTextを使用して同じテキストを含む複数の要素を取得する
    const dates = getAllByText('2022・6・23');
    expect(dates[0]).toBeInTheDocument();
  });

  it('renders a video on the appropriate pages', () => {
    const { getByText } = render(<Album />);

    // 適切なページにビデオ要素が表示されているか確認する
    expect(getByText('喋るつむぎさん')).toBeInTheDocument();
    expect(getByText('1歳なった')).toBeInTheDocument();
  });
});
