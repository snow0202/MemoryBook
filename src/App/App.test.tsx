import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // 追加: Jest DOM matchersをインポート
import App from './App';

// モックコンポーネントの定義
jest.mock('../Components/Header/Header', () => ({
  Header: () => <div>Mocked Header</div>
}));

jest.mock('../Components/Album/Album', () => ({
  Album: () => <div>Mocked Album</div>
}));

describe('App', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<App />);
    
    // モックされたHeaderとAlbumコンポーネントがレンダリングされるかをチェック
    expect(getByText('Mocked Header')).toBeInTheDocument();
    expect(getByText('Mocked Album')).toBeInTheDocument();
  });
});
