import ComponentTesting from 'pages/ComponentTesting';
import { BrowserRouter, Route, Routes } from "react-router-dom";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/componenttest" element={<ComponentTesting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
