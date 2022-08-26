import { Route, Routes } from '../node_modules/react-router-dom/index';
import NewsPage from './pages/Newspage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
};

export default App;
