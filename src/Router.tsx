import AvailableSchedule from 'pages/AvailableSchedule/AvailableSchedule';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/scheduletest" element={<AvailableSchedule />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
