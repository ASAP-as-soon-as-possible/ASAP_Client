import ComponentTesting from 'pages/ComponentTesting';
import LibraryTP from 'pages/LibraryTP';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/componenttest" element={<ComponentTesting />} />
        <Route path="/library" element={<LibraryTP />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
