import ComponentTesting from 'pages/ComponentTesting';
import CreateMetting from 'pages/CreateMetting';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/componenttest" element={<ComponentTesting />} />
        <Route path="/createmetting" element={<CreateMetting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
