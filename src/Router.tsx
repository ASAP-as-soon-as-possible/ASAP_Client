import ComponentTesting from 'pages/ComponentTesting';
import ViewTesting from 'pages/ViewTesting';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/componenttest" element={<ComponentTesting />} />
        <Route path="/viewtesting" element={<ViewTesting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
