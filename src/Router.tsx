import AvailableSchedule from 'pages/AvailableSchedule/AvailableSchedule';
import ComponentTesting from 'pages/ComponentTesting';
import CreateMetting from 'pages/createMeeting/CreateMetting';
import OnBoarding from 'pages/onBoarding/OnBoarding';
import SelectPage from 'pages/selectSchdule/SelectPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/componenttest" element={<ComponentTesting />} />
        <Route path="/" element={<OnBoarding />} />
        <Route path="/scheduletest" element={<AvailableSchedule />} />
        <Route path="/meet/create" element={<CreateMetting />} />
        <Route path="/meet/complete" element={<div>회의 생성 완료페이지를 넣어주세요</div>} />
        <Route path="/schedule/:meetingId" element={<div>가능 시간 입력페이지를 넣어주세요</div>} />
        <Route path="/priority/:meetingId" element={<div>우선순위 선정페이지를 넣어주세요</div>} />
        <Route path="/schedule-complete/:meetingId" element={<div>일정 입력 완료 페이지</div>} />
        <Route path="/meet/:meetingId" element={<div>링크입장페이지</div>} />
        <Route path="/login/:meetingId" element={<div>로그인 페이지를 넣어주세요</div>} />
        <Route path="/host/:meetingId" element={<div>최적의 회의시간 페이지를 넣어주세요</div>} />
        <Route path="/q-card/:meetingId" element={<div>큐카드 페이지를 넣어주세요</div>} />
        <Route path="*" element={<div>not found</div>} />
        <Route path="/select" element={<SelectPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
